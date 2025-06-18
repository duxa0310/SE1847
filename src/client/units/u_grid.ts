import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import * as tex from "../anim/rnd/res/tex.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as shd from "../anim/rnd/res/shd.ts";
import { Vertex } from "../anim/rnd/prim.ts";
import { Unit } from "./units.js";
import { mtlGetDefault } from "../anim/rnd/res/mtl.ts";
import { getAnimContext } from "../anim/anim.ts";

export function getPointHeight(x: number, z: number): number {
  return 8 * mth.noiseTurb2D(x / 30, z / 30, 7);
}

function createChunkPrimitive(x0: number, y0: number, z0: number, w: number, h: number, tessW: number, tessH: number): prim.Primitive {
  const vertices: Vertex[][] = new Array(tessH).fill([]);
  for (let i: number = 0; i < tessH; i++) {
    vertices[i] = new Array(tessW);
    for (let j: number = 0; j < tessW; j++) {
      vertices[i][j] = new Vertex(mth.vec3Set1(0), mth.vec2Set1(0), mth.vec3Set1(0), mth.vec4Set1(0));
      vertices[i][j].position = mth.vec3AddVec3(mth.vec3Set(x0, y0, z0),
        mth.vec3Set(w * i / (tessH - 1), 0, h * j / (tessW - 1)));
      vertices[i][j].position.y = getPointHeight(vertices[i][j].position.x, vertices[i][j].position.z);
      vertices[i][j].texCoord = mth.vec2Set(i / (tessH - 1), j / (tessW - 1));
      vertices[i][j].normal = mth.vec3Set(0, 0, 0);
      vertices[i][j].color = mth.vec4Set(0.47, 0.8, 0.30, 1);
    }
  }
  for (let i: number = 0; i < tessH - 1; i++) {
    for (let j: number = 0; j < tessW - 1; j++) {
      const
        p00: Vertex = vertices[i][j],
        p01: Vertex = vertices[i][j + 1],
        p10: Vertex = vertices[i + 1][j],
        p11: Vertex = vertices[i + 1][j + 1];
      let n = mth.vec3Normalize(mth.vec3CrossVec3(mth.vec3SubVec3(p00.position, p10.position), mth.vec3SubVec3(p11.position, p10.position)));
      p00.normal = mth.vec3AddVec3(p00.normal, n);
      p10.normal = mth.vec3AddVec3(p10.normal, n);
      p11.normal = mth.vec3AddVec3(p11.normal, n);
      n = mth.vec3Normalize(mth.vec3CrossVec3(mth.vec3SubVec3(p11.position, p01.position), mth.vec3SubVec3(p00.position, p01.position)));
      p00.normal = mth.vec3AddVec3(p00.normal, n);
      p01.normal = mth.vec3AddVec3(p01.normal, n);
      p11.normal = mth.vec3AddVec3(p11.normal, n);
    }
  }
  for (let i: number = 0; i < tessH - 1; i++) {
    for (let j: number = 0; j < tessW - 1; j++) {
      vertices[i][j].normal = mth.vec3Normalize(vertices[i][j].normal);
    }
  }
  const indices: number[] = new Array((tessH - 1) * (tessW * 2 + 1) - 1).fill(0);
  for (let i: number = 0, k: number = 0; i < tessH - 1; i++) {
    for (let j: number = 0; j < tessW; j++) {
      indices[k++] = (i + 1) * tessW + j;
      indices[k++] = i * tessW + j;
    }
    if (i != tessH - 2)
      indices[k++] = -1;
  }
  const verticesList: Vertex[] = [];
  for (let i: number = 0; i < tessH; i++) {
    for (let j: number = 0; j < tessW; j++) {
      verticesList.push(vertices[i][j]);
    }
  }
  return prim.primCreate(window.gl.TRIANGLE_STRIP, mtlGetDefault(), verticesList, indices);
}

export class UnitGrid extends Unit {
  prim!: prim.Primitive;
  lands: prim.Primitive[] = [];
  mtl!: mtl.Material;
  flagFirst: boolean = true;
  locX: number = 0;
  locZ: number = 0;

  constructor() {
    super("Grid");
    const loc: mth.vec3 = getAnimContext().playerPos;
    this.locX = (loc.x / 32) >> 0;
    this.locZ = (loc.z / 32) >> 0;
  }

  async init() {
    const x0: number = 0, y0: number = 0, z0: number = 0;
    const w: number = 32, h: number = 32;
    const tessW: number = 32, tessH: number = 32;

    const mtlLand: mtl.Material = new mtl.Material("Land material", mth.vec3Set1(1), mth.vec3Set1(0.8), mth.vec3Set1(0), 30, 1, shd.shdGetDefault());
    mtlLand.textures[0] = tex.texCreateImage("Land texture", "bin/textures/land_grass.jpg", 1, 1);
    this.mtl = mtlLand;
  }

  response() {
    const loc: mth.vec3 = getAnimContext().playerPos;
    const x0: number = (loc.x / 32) >> 0, z0: number = (loc.z / 32) >> 0;

    if (x0 != this.locX || z0 != this.locZ || this.flagFirst) {
      this.flagFirst = false;
      this.lands = [];
      for (let i: number = -3; i < 4; i++) {
        for (let j: number = -3; j < 4; j++) {
          const prim: prim.Primitive = createChunkPrimitive(x0 * 32 + i * 32, 0, z0 * 32 + j * 32, 32, 32,
            (32 / (Math.abs(j) + 1)) >> 0, (32 / (Math.abs(i) + 1)) >> 0);
          prim.mtl = this.mtl;
          this.lands.push(prim);
        }
      }
      console.log(x0, z0);
      this.locX = x0;
      this.locZ = z0;
    }
  }

  render() {
    for (let i: number = 0; i < this.lands.length; i++) {
      this.lands[i].draw(mth.mat4Identity());
    }
  }
}
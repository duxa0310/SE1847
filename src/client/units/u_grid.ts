import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import { Vertex } from "../anim/rnd/prim.ts";
import { Unit } from "./units.js";
import { mtlGetDefault } from "../anim/rnd/res/mtl.ts";

export class UnitGrid extends Unit {
  prim!: prim.Primitive;

  constructor() {
    super("Grid");
  }

  async init() {
    const x0: number = 0, y0: number = 0, z0: number = 0;
    const w: number = 18, h: number = 18;
    const tessW: number = 32, tessH: number = 32;

    const vertices: Vertex[][] = new Array(tessH).fill([]);
    for (let i: number = 0; i < tessH; i++) {
      vertices[i] = new Array(tessW);
      for (let j: number = 0; j < tessW; j++) {
        vertices[i][j] = new Vertex(mth.vec3Set1(0), mth.vec2Set1(0), mth.vec3Set1(0), mth.vec4Set1(0));
        vertices[i][j].position = mth.vec3AddVec3(mth.vec3Set(x0, y0, z0),
          mth.vec3Set(w * i / (tessH - 1), 0, h * j / (tessW - 1)));
        vertices[i][j].position.y = 8 * mth.noiseTurb2D(vertices[i][j].position.x / 30.0, vertices[i][j].position.z / 30.0, 7);
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
    this.prim = prim.primCreate(window.gl.TRIANGLE_STRIP, mtlGetDefault(), verticesList, indices);
  }

  response() { }

  render() {
    this.prim.draw(mth.mat4Identity());
  }
}
import * as mth from "../../mth/mth.ts"
import * as prim from "./prim.ts"
import * as mtl from "./res/mtl.ts"
import * as tex from "./res/tex.ts"
import * as shd from "./res/shd.ts"
import { loadBinaryFromFile } from "../../utils.js";

class g3dmMaterial {
  name!: string;
  ka!: mth.vec3;
  kd!: mth.vec3;
  ks!: mth.vec3;
  ph!: number;
  trans!: number;
  texs!: tex.Texture[];
}

export class Model {
  prims: prim.Primitive[] = new Array();
  trans: mth.mat4 = mth.mat4Identity();

  constructor(prims: prim.Primitive[]) {
    this.prims = prims;
  }

  draw(matrW: mth.mat4) {
    const m: mth.mat4 = mth.mat4MulMat4(this.trans, matrW);
    for (let i: number = 0; i < this.prims.length; i++) {
      this.prims[i].draw(m);
    }
  }
}

function modelAddPrim(model: Model, prim: prim.Primitive): Model {
  model.prims.push(prim);

  return model;
}

export async function modelCreateFromG3DM(url: string): Promise<Model> {
  let model: Model = new Model([]);
  const dataBuffer: ArrayBuffer = await loadBinaryFromFile(url);
  const buffer: Uint8Array = new Uint8Array(dataBuffer);
  let curPos: number = 0;
  let primPos: number = 0;
  let mtlPos: number = 0;
  const sign = buffer.slice(curPos, curPos += 4).reduce((res_str, ch) => res_str += String.fromCharCode(ch), "");
  if (sign != "G3DM") {
    console.error("Error, file is not *.g3dm")
  }

  let tm: mth.mat4 = mth.mat4Identity(),
    tminv = mth.mat4Transpose(mth.mat4Inverse(tm));
  let defMtl: mtl.Material = mtl.mtlGetDefault();

  let materials: mtl.Material[] = [];
  let textures: tex.Texture[] = [];

  let numOfPrims!: number;
  let numOfMaterials!: number;
  let numOfTextures!: number;

  [numOfPrims, numOfMaterials, numOfTextures] = new Uint32Array(dataBuffer.slice(curPos, curPos += 4 * 3));

  let i: number;
  let j: number;
  primPos = curPos;
  for (i = 0; i < numOfPrims; i++) {
    let numOfVertices!: number;
    let numOfFacetIndices!: number;
    let mtlNo!: number;
    [numOfVertices, numOfFacetIndices, mtlNo] = new Uint32Array(dataBuffer.slice(curPos, curPos += 4 * 3));
    curPos += numOfFacetIndices * 4 + numOfVertices * 4 * 12;
  }

  mtlPos = curPos;
  curPos += (300 + (11 + 8) * 4 + 300 + 4) * numOfMaterials

  for (i = 0; i < numOfTextures; i++) {
    let texName = buffer.slice(curPos, curPos += 300).reduce((res_str, ch) => res_str += ch == 0 ? "" : String.fromCharCode(ch), "");
    let w: number;
    let h: number;
    let c: number;
    [w, h, c] = new Uint32Array(dataBuffer.slice(curPos, curPos += 4 * 3));
    let img = buffer.slice(curPos, curPos += w * h * c);
    let tex1: tex.Texture = tex.texCreateBinary(texName, w, h, c, img);
    textures[i] = tex1;
  }

  curPos = mtlPos;
  for (i = 0; i < numOfMaterials; i++) {
    let mtlName = buffer.slice(curPos, curPos += 300).reduce((res_str, ch) => res_str += ch == 0 ? "" : String.fromCharCode(ch), "");

    let s = new Float32Array(dataBuffer.slice(curPos, curPos += 4 * 11));
    let texArray = new Int32Array(dataBuffer.slice(curPos, curPos += 4 * 8));
    let mtl1: g3dmMaterial = {
      name: mtlName,
      ka: mth.vec3Set(s[0], s[1], s[2]),
      kd: mth.vec3Set(s[3], s[4], s[5]),
      ks: mth.vec3Set(s[6], s[7], s[8]),
      ph: s[9],
      trans: s[10],
      texs: new Array(8),
    }
    materials[i] = mtl.mtlCreate(mtl1.name, mtl1.ka, mtl1.kd, mtl1.ks, mtl1.ph, mtl1.trans, shd.shdGetDefault());
    for (let j = 0; j < 8; j++) {
      materials[i].textures[j] = textures[texArray[j]];
    }
    curPos += 300 + 4;
  }

  curPos = primPos;
  for (j = 0; j < numOfPrims; j++) {
    let numOfVertices!: number;
    let numOfFacetIndices!: number;
    let mtlNo!: number;
    [numOfVertices, numOfFacetIndices, mtlNo] = new Uint32Array(dataBuffer.slice(curPos, curPos += 4 * 3));
    let v1 = new Float32Array(dataBuffer.slice(curPos, curPos += 4 * 12 * numOfVertices));
    let v: prim.Vertex[] = [];
    for (i = 0; i < v1.length; i += 12) {
      v[i / 12] = new prim.Vertex(mth.vec3Set(v1[i], v1[i + 1], v1[i + 2]),
        mth.vec2Set(v1[i + 3], v1[i + 4]),
        mth.vec3Set(v1[i + 5], v1[i + 6], v1[i + 7]),
        mth.vec4Set(v1[i + 8], v1[i + 9], v1[i + 10], v1[i + 11]))
    }
    let ind1 = new Uint32Array(dataBuffer.slice(curPos, curPos += 4 * numOfFacetIndices));
    let ind: number[] = [];
    for (i = 0; i < ind1.length; i++) {
      ind[i] = ind1[i];
    }

    for (i = 0; i < numOfVertices; i++) {
      //v[i] = new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0, 0, 0, 0));
      v[i].position = mth.pointTransform(v[i].position, tm);
      v[i].normal = mth.vectorTransform(v[i].normal, tminv);
    }

    model = modelAddPrim(model, prim.primCreate(window.gl.TRIANGLES, defMtl, v, ind));
    model.prims[j].mtl = materials[mtlNo];
  }

  return model;
}
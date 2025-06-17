import { vec2, vec3, vec4 } from "../../../mth/mth.ts"
import * as mth from "../../../mth/mth.ts"
import { Shader, shdGetDefault } from "./shd.ts"
import { Texture } from "./tex.ts"

const mtlDict: Material[] = [];

export class Material {
  name: string;
  ka: vec3; kd: vec3; ks: vec3;
  ph: number; trans: number;
  shd: Shader;
  textures: Texture[] = [];

  constructor(name: string, ka: vec3, kd: vec3, ks: vec3, ph: number, trans: number, shd: Shader) {
    this.name = name;
    this.ka = structuredClone(ka);
    this.kd = structuredClone(kd);
    this.ks = structuredClone(ks);
    this.ph = ph;
    this.trans = trans;
    this.shd = shd;
    mtlDict.push(this);
  }

  apply() {
    window.gl.useProgram(this.shd.program);

    window.gl.uniform3fv(window.gl.getUniformLocation(this.shd.program, "Ka"), new Float32Array([this.ka.x, this.ka.y, this.ka.z]), 0, 0);
    window.gl.uniform4fv(window.gl.getUniformLocation(this.shd.program, "KdTrans"), new Float32Array([this.kd.x, this.kd.y, this.kd.z, this.trans]), 0, 0);
    window.gl.uniform4fv(window.gl.getUniformLocation(this.shd.program, "KsPh"), new Float32Array([this.ks.x, this.ks.y, this.ks.z, this.ph]), 0, 0);

    for (let i: number = 0; i < this.textures.length; i++) {
      window.gl.activeTexture(window.gl.TEXTURE0 + i);
      window.gl.bindTexture(window.gl.TEXTURE_2D, this.textures[i].id);
      window.gl.uniform1i(window.gl.getUniformLocation(this.shd.program, "Tex" + i), 0);
    }
  }
}

export function mtlCreate(name: string, ka: vec3, kd: vec3, ks: vec3, ph: number, trans: number) {
  return new Material(name, ka, kd, ks, ph, trans, shdGetDefault());
}

export function mtlInit() {
  mtlDict.push(
    mtlCreate("Default", mth.vec3Set1(0.5), mth.vec3Set1(0.8), mth.vec3Set1(0.3), 30, 1),
    mtlCreate("Void", mth.vec3Set(0, 0, 0), mth.vec3Set(0, 0, 0), mth.vec3Set(0, 0, 0), 0, 1),
    mtlCreate("Black Plastic", mth.vec3Set(0.0, 0.0, 0.0), mth.vec3Set(0.01, 0.01, 0.01), mth.vec3Set(0.5, 0.5, 0.5), 32, 1),
    mtlCreate("Brass", mth.vec3Set(0.329412, 0.223529, 0.027451), mth.vec3Set(0.780392, 0.568627, 0.113725), mth.vec3Set(0.992157, 0.941176, 0.807843), 27.8974, 1),
    mtlCreate("Bronze", mth.vec3Set(0.2125, 0.1275, 0.054), mth.vec3Set(0.714, 0.4284, 0.18144), mth.vec3Set(0.393548, 0.271906, 0.166721), 25.6, 1),
    mtlCreate("Chrome", mth.vec3Set(0.25, 0.25, 0.25), mth.vec3Set(0.4, 0.4, 0.4), mth.vec3Set(0.774597, 0.774597, 0.774597), 76.8, 1),
    mtlCreate("Copper", mth.vec3Set(0.19125, 0.0735, 0.0225), mth.vec3Set(0.7038, 0.27048, 0.0828), mth.vec3Set(0.256777, 0.137622, 0.086014), 12.8, 1),
    mtlCreate("Gold", mth.vec3Set(0.24725, 0.1995, 0.0745), mth.vec3Set(0.75164, 0.60648, 0.22648), mth.vec3Set(0.628281, 0.555802, 0.366065), 51.2, 1),
    mtlCreate("Peweter", mth.vec3Set(0.10588, 0.058824, 0.113725), mth.vec3Set(0.427451, 0.470588, 0.541176), mth.vec3Set(0.3333, 0.3333, 0.521569), 9.84615, 1),
    mtlCreate("Silver", mth.vec3Set(0.19225, 0.19225, 0.19225), mth.vec3Set(0.50754, 0.50754, 0.50754), mth.vec3Set(0.508273, 0.508273, 0.508273), 51.2, 1),
    mtlCreate("Polished Silver", mth.vec3Set(0.23125, 0.23125, 0.23125), mth.vec3Set(0.2775, 0.2775, 0.2775), mth.vec3Set(0.773911, 0.773911, 0.773911), 89.6, 1),
    mtlCreate("Turquoise", mth.vec3Set(0.1, 0.18725, 0.1745), mth.vec3Set(0.396, 0.74151, 0.69102), mth.vec3Set(0.297254, 0.30829, 0.306678), 12.8, 1),
    mtlCreate("Ruby", mth.vec3Set(0.1745, 0.01175, 0.01175), mth.vec3Set(0.61424, 0.04136, 0.04136), mth.vec3Set(0.727811, 0.626959, 0.626959), 76.8, 1),
    mtlCreate("Polished Gold", mth.vec3Set(0.24725, 0.2245, 0.0645), mth.vec3Set(0.34615, 0.3143, 0.0903), mth.vec3Set(0.797357, 0.723991, 0.208006), 83.2, 1),
    mtlCreate("Polished Bronze", mth.vec3Set(0.25, 0.148, 0.06475), mth.vec3Set(0.4, 0.2368, 0.1036), mth.vec3Set(0.774597, 0.458561, 0.200621), 76.8, 1),
    mtlCreate("Polished Copper", mth.vec3Set(0.2295, 0.08825, 0.0275), mth.vec3Set(0.5508, 0.2118, 0.066), mth.vec3Set(0.580594, 0.223257, 0.0695701), 51.2, 1),
    mtlCreate("Jade", mth.vec3Set(0.135, 0.2225, 0.1575), mth.vec3Set(0.135, 0.2225, 0.1575), mth.vec3Set(0.316228, 0.316228, 0.316228), 12.8, 1),
    mtlCreate("Obsidian", mth.vec3Set(0.05375, 0.05, 0.06625), mth.vec3Set(0.18275, 0.17, 0.22525), mth.vec3Set(0.332741, 0.328634, 0.346435), 38.4, 1),
    mtlCreate("Pearl", mth.vec3Set(0.25, 0.20725, 0.20725), mth.vec3Set(1.0, 0.829, 0.829), mth.vec3Set(0.296648, 0.296648, 0.296648), 11.264, 1),
    mtlCreate("Emerald", mth.vec3Set(0.0215, 0.1745, 0.0215), mth.vec3Set(0.07568, 0.61424, 0.07568), mth.vec3Set(0.633, 0.727811, 0.633), 76.8, 1),
    mtlCreate("Black Plastic", mth.vec3Set(0.0, 0.0, 0.0), mth.vec3Set(0.01, 0.01, 0.01), mth.vec3Set(0.5, 0.5, 0.5), 32.0, 1),
    mtlCreate("Black Rubber", mth.vec3Set(0.02, 0.02, 0.02), mth.vec3Set(0.01, 0.01, 0.01), mth.vec3Set(0.4, 0.4, 0.4), 10.0, 1),
  );
}

export function mtlGetDefault(): Material {
  return mtlDict[0];
}

export function mtlGetByName(name: string): Material {
  for (let i: number = 1; i < mtlDict.length; i++) {
    if (mtlDict[i].name == name) {
      return mtlDict[i];
    }
  }
  return mtlDict[0];
}
import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as shd from "../anim/rnd/res/shd.ts";
import { Unit } from "./units.js";
import { getRenderContext } from "../anim/rnd/rnd.ts";

export class UnitAxis extends Unit {
  prim!: prim.Primitive;

  constructor() {
    super("Axis");
  }

  async init() {
    const far: number = getRenderContext().farClip;
    const mtlAxis: mtl.Material = new mtl.Material("Axis material", mth.vec3Set1(1), mth.vec3Set1(0), mth.vec3Set1(0), 30, 1, 
      shd.shdGetByName("axis"));
    this.prim = prim.primCreate(window.gl.LINES, mtlAxis, [
      new prim.Vertex(mth.vec3Set(far, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(1, 0, 0, 1)),
      new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(1, 0, 0, 1)),
      new prim.Vertex(mth.vec3Set(0, far, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0, 1, 0, 1)),
      new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0, 1, 0, 1)),
      new prim.Vertex(mth.vec3Set(0, 0, far), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0, 0, 1, 1)),
      new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0, 0, 1, 1)),
    ], []);
  }

  response() { }

  render() {
    this.prim.draw(mth.mat4Identity());
  }
}
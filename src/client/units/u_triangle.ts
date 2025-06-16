import * as mth from "../mth/mth.js"
import { Unit } from "./units.js";
import * as prim from "../anim/rnd/prim.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";

export class UnitTriangle extends Unit {
  prim!: prim.Primitive;

  constructor() {
    super("Triangle");
    this.name = "Triangle";
  }

  init() {
    this.prim = prim.primCreate(window.gl.TRIANGLES, mtl.mtlGetDefault(),
      [
        new prim.Vertex(mth.vec3Set(0, 1, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.96, 0.95, 0.41, 1)),
        new prim.Vertex(mth.vec3Set(1, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.36, 0.70, 0.44, 1)),
        new prim.Vertex(mth.vec3Set(0, 0, 1), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.78, 0.98, 0.84, 1)),
      ], [])
  }

  response() { }

  render() {
    this.prim.draw(mth.mat4Identity());
  }
}
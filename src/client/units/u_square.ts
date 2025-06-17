import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as shd from "../anim/rnd/res/shd.ts";
import * as tex from "../anim/rnd/res/tex.ts";
import * as time from "../anim/timer.ts";
import { Unit } from "./units.js";

export class UnitSquare extends Unit {
  prim!: prim.Primitive;

  constructor() {
    super("Square");
  }

  async init() {
    const mtlSquare: mtl.Material = new mtl.Material("Square material", mth.vec3Set1(0.5), mth.vec3Set1(0.8), mth.vec3Set1(0.3), 30, 1, shd.shdGetDefault());
    mtlSquare.textures[0] = tex.texCreateImage("Square texture", "bin/textures/LOGO30.bmp", 1, 1);
    this.prim = prim.primCreate(window.gl.TRIANGLE_STRIP, mtlSquare, [
      new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.96, 0.95, 0.41, 1)),
      new prim.Vertex(mth.vec3Set(18, 0, 0), mth.vec2Set(1, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.36, 0.70, 0.44, 1)),
      new prim.Vertex(mth.vec3Set(0, 18, 0), mth.vec2Set(0, 1), mth.vec3Set(0, 0, 0), mth.vec4Set(0.78, 0.98, 0.84, 1)),
      new prim.Vertex(mth.vec3Set(18, 18, 0), mth.vec2Set(1, 1), mth.vec3Set(0, 0, 0), mth.vec4Set(0.78, 0.98, 0.84, 1)),
    ], []);
  }

  response() { }

  render() {
    this.prim.draw(mth.mat4Translate(mth.vec3Set(0, 5 * Math.sin(time.getTimeContext().localTime), 0)));
  }
}
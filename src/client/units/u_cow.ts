import * as mth from "../mth/mth.js"
import { Unit } from "./units.js";
import * as prim from "../anim/rnd/prim.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as time from "../anim/timer.ts";

export class UnitCow extends Unit {
  prim!: prim.Primitive;

  constructor() {
    super("Cow");
  }

  async init() {
    this.prim = await prim.primCreateFromOBJ("bin/models/cow.obj", mtl.mtlGetDefault());
  }

  response() { }

  render() {
    this.prim.draw(mth.mat4MulMat4(mth.mat4RotateX(30 * Math.sin(time.getTimeContext().localTime)),
      mth.mat4Translate(mth.vec3Set(0, 3 * Math.sin(time.getTimeContext().localTime), 0))));
  }
}
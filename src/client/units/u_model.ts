import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import * as model from "../anim/rnd/model.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as time from "../anim/timer.ts";
import { Unit } from "./units.js";

export class UnitModel extends Unit {
  model!: model.Model;
  prim!: prim.Primitive;

  constructor() {
    super("Model");
  }

  async init() {
    //this.model = await model.modelCreateFromG3DM("bin/models/helic.g3dm");
    this.prim = await prim.primCreateFromOBJ("bin/models/t90.obj", mtl.mtlGetDefault());
  }

  response() { }

  render() {
    let tc = time.getTimeContext();
    prim.changePrimTrans(this.prim, mth.mat4MulMat4(
      mth.mat4RotateZ(tc.localTime * 30),
      mth.mat4Translate(mth.vec3Set(10, 10 * Math.sin(tc.localTime), 0))
    )
    );
    this.prim.draw(mth.mat4Identity());
    prim.drawPrimBB(this.prim);
  }
}
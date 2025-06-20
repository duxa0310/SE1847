import * as mth from "../mth/mth.js"
import * as prim from "../anim/rnd/prim.ts";
import * as model from "../anim/rnd/model.ts";
import * as mtl from "../anim/rnd/res/mtl.ts";
import * as time from "../anim/timer.ts";
import { Unit } from "./units.js";

export class UnitModel extends Unit {
  model!: model.Model;
  prim1!: prim.Primitive;
  prim2!: prim.Primitive;

  constructor() {
    super("Model");
  }

  async init() {
    //this.model = await model.modelCreateFromG3DM("bin/models/helic.g3dm");
    this.prim1 = await prim.primCreateFromOBJ("bin/models/t90.obj", mtl.mtlGetDefault());
    this.prim2 = await prim.primCreateFromOBJ("bin/models/t90.obj", mtl.mtlGetDefault());
  }

  response() { }

  render() {
    let tc = time.getTimeContext();
    prim.changePrimTrans(this.prim1, mth.mat4MulMat4(
      mth.mat4RotateZ(tc.localTime * 30),
      mth.mat4Translate(mth.vec3Set(10, 40 + 10 * Math.sin(tc.localTime), 0))));

    prim.changePrimTrans(this.prim2, mth.mat4MulMat4(
      mth.mat4RotateX(tc.localTime * 47),
      mth.mat4MulMat4(
        mth.mat4Translate(mth.vec3Set(14, 40 + 5 * Math.sin(tc.localTime), 4)),
        mth.mat4RotateZ(52 * tc.localTime))));

    this.prim1.draw(mth.mat4Identity());
    prim.drawPrimBB(this.prim1);

    this.prim2.draw(mth.mat4Identity());
    prim.drawPrimBB(this.prim2);

    /*if (prim.collidePrim(this.prim1, this.prim2)) {
      console.log("Collision detected.")
    } */

    if (prim.obbCollision(new prim.OBB(this.prim1.bb), new prim.OBB(this.prim2.bb))) {
      console.log("Collision detected.");
    }
  }
}
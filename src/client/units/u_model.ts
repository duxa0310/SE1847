import * as mth from "../mth/mth.js"
import * as model from "../anim/rnd/model.ts";
import { Unit } from "./units.js";

export class UnitModel extends Unit {
  model!: model.Model;

  constructor() {
    super("Model");
  }

  async init() {
    this.model = await model.modelCreateFromG3DM("bin/models/helic.g3dm");
  }

  response() { }

  render() {
    this.model.draw(mth.mat4Identity());
  }
}
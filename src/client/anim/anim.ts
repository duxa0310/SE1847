import * as rnd from "./rnd/rnd.ts"
import * as time from "./timer.ts"
import * as input from "./input.ts"
import * as shd from "./rnd/res/shd.ts";
import * as mtl from "./rnd/res/mtl.ts";
import { UnitTriangle } from "../units/u_triangle.ts"
import * as units from "../units/units.ts"
import { UnitAxis } from "../units/a_axis.ts";

declare global {
  interface Window {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
  }
}

export async function animInit() {
  rnd.rndInit();
  time.timerInit();
  input.inputInit();
  await shd.shdInit();
  mtl.mtlInit();
  units.unitAdd(new UnitAxis());
  units.unitAdd(new UnitTriangle());
  await units.unitsInit();
}

export function animRender() {
  time.timerResponse();
  rnd.rndStart();
  units.unitsResponse();
  units.unitsRender();
  window.requestAnimationFrame(animRender);
}
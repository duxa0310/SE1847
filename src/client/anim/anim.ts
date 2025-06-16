import * as rnd from "./rnd/rnd.ts"
import * as time from "./timer.ts"
import * as input from "./input.ts"
import * as shd from "./rnd/res/shd.ts";
import * as mtl from "./rnd/res/mtl.ts";
import { UnitTriangle } from "../units/u_triangle.ts"

declare global {
  interface Window {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
  }
}

const triangle = new UnitTriangle();


export async function animInit() {
  rnd.rndInit();
  time.timerInit();
  input.inputInit();
  await shd.shdInit();
  mtl.mtlInit();
  triangle.init();
}

export function animRender() {
  time.timerResponse();
  rnd.rndStart();
  triangle.render();
  window.requestAnimationFrame(animRender);
}
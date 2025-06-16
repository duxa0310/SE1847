import * as rnd from "./rnd/rnd.ts"
import * as time from "./timer.ts"
import * as input from "./input.ts"
import * as shd from "./rnd/res/shd.ts";
import * as mtl from "./rnd/res/mtl.ts";

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
}

export function animRender() {
  time.timerResponse();
  rnd.rndStart();
  window.requestAnimationFrame(animRender);
}
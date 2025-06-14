import * as rnd from "./rnd/rnd.ts"
import * as time from "./timer.ts"
import * as input from "./input.ts"

declare global {
  interface Window {
    canvas: HTMLCanvasElement;
    gl: WebGLRenderingContext;
  }
}

export function animInit() {
  rnd.rndInit();
  time.timerInit();
  input.inputInit();
}

export function animRender() {
  time.timerResponse();
  input.inputResponse();
  rnd.rndStart();
  window.requestAnimationFrame(animRender);
}
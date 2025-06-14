import * as mth from "../../mth/mth.ts"

let projSize: number;
let projDist: number;
let farClip: number;

let frameW: number;
let frameH: number;

let camLoc: mth.vec3;
let camAt: mth.vec3;
let camUp: mth.vec3;
let camDir: mth.vec3;
let camRight: mth.vec3;

let matrProj: mth.mat4;
let matrView: mth.mat4;
let matrVP: mth.mat4;

export class RenderContext {
  projSize: number; projDist: number; farClip: number;
  frameW: number; frameH: number;
  camLoc: mth.vec3; camAt: mth.vec3; camUp: mth.vec3; camDir: mth.vec3; camRight: mth.vec3;
  matrProj: mth.mat4; matrView: mth.mat4; matrVP: mth.mat4;

  constructor(projSize: number, projDist: number, farClip: number, frameW: number, frameH: number,
    camLoc: mth.vec3, camAt: mth.vec3, camUp: mth.vec3, camDir: mth.vec3, camRight: mth.vec3,
    matrProj: mth.mat4, matrView: mth.mat4, matrVP: mth.mat4) {
    this.projSize = projSize;
    this.projDist = projDist;
    this.farClip = farClip;
    this.frameW = frameW;
    this.frameH = frameH;
    this.camLoc = camLoc;
    this.camAt = camAt;
    this.camUp = camUp;
    this.camDir = camDir;
    this.camRight = camRight;
    this.matrProj = matrProj;
    this.matrView = matrView;
    this.matrVP = matrVP;
  }
}

export function rndCamSet(loc: mth.vec3, at: mth.vec3, up: mth.vec3) {
  camLoc = loc;
  camAt = at;
  matrView = mth.mat4View(loc, at, up);
  camRight = mth.vec3Set(
    matrView.a[0][0],
    matrView.a[1][0],
    matrView.a[2][0]
  );
  camUp = mth.vec3Set(
    matrView.a[0][1],
    matrView.a[1][1],
    matrView.a[2][1]
  );
  camDir = mth.vec3Set(
    -matrView.a[0][2],
    -matrView.a[1][2],
    -matrView.a[2][2]
  );
}

export function rndProjSet(w: number, h: number) {
  let rx, ry;
  rx = ry = projSize;

  frameW = w;
  frameH = h;

  if (frameW >= frameH) {
    rx *= frameW / frameH;
  }
  else {
    ry *= frameH / frameW;
  }
  matrProj = mth.mat4Frustum(-rx / 2, rx / 2, -ry / 2, ry / 2, projDist, farClip);
  matrVP = mth.mat4MulMat4(matrView, matrProj);
}

export function rndStart() {
  window.gl.clearColor(0.30, 0.47, 0.8, 1);
  window.gl.viewport(0, 0, 1920, 1080);
  window.gl.clear(window.gl.COLOR_BUFFER_BIT);

  matrView = mth.mat4View(camLoc, camAt, camUp);
  matrVP = mth.mat4MulMat4(matrView, matrProj);
}

export function rndInit() {
  window.gl.blendFunc(window.gl.SRC_ALPHA, window.gl.ONE_MINUS_SRC_ALPHA);
  window.gl.enable(window.gl.DEPTH_TEST);

  projSize = 0.1;
  projDist = projSize;
  farClip = 1847;

  rndCamSet(mth.vec3Set1(18), mth.vec3Set1(0), mth.vec3Set(0, 1, 0));
  rndProjSet(document.documentElement.clientWidth, document.documentElement.clientHeight);
}

export function getRenderContext(): RenderContext {
  return new RenderContext(projSize, projDist, farClip, frameW, frameH, camLoc, camAt, camUp, camDir, camRight, matrProj, matrView, matrVP);
}
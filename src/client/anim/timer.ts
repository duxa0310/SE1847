/** SE1847: timer.ts */

let startTime: number;
let oldTime: number;
let oldTimeFPS: number;
let pauseTime: number;
let frameCounter: number;
let globalTime: number;
let globalDeltaTime: number;
let localDeltaTime: number;
let localTime: number;
let fps: number;
let isPause: boolean = false;

export function timerInit() {
  const date: Date = new Date();
  let t: number =
    date.getMilliseconds() / 1000.0 +
    date.getSeconds() +
    date.getMinutes() * 60;

  pauseTime = 0;
  startTime = oldTime = oldTimeFPS = t;
  frameCounter = 0;
  fps = 30 * 2;
}

export function timerResponse() {
  const date: Date = new Date();
  let t: number =
    date.getMilliseconds() / 1000.0 +
    date.getSeconds() +
    date.getMinutes() * 60;

  globalTime = t - startTime;
  globalDeltaTime = t - oldTime;

  if (isPause) {
    localDeltaTime = 0;
    pauseTime += t - oldTime;
  }
  else {
    localDeltaTime = globalDeltaTime;
    localTime = t - pauseTime - startTime;
  }

  frameCounter++;
  if (t - oldTimeFPS > 3) {
    fps = frameCounter / (t - oldTimeFPS);
    oldTimeFPS = t;
    frameCounter = 0;
  }
  oldTime = t;
}

export class TimeContext {
  startTime: number;
  oldTime: number;
  oldTimeFPS: number;
  pauseTime: number;
  frameCounter: number;
  globalTime: number;
  globalDeltaTime: number;
  localDeltaTime: number;
  localTime: number;
  fps: number;
  isPause: boolean;

  constructor(startTime: number, oldTime: number, oldTimeFPS: number, pauseTime: number, frameCounter: number, globalTime: number,
    globalDeltaTime: number, localDeltaTime: number, localTime: number, fps: number, isPause: boolean) {
    this.startTime = startTime;
    this.oldTime = oldTime;
    this.oldTimeFPS = oldTimeFPS;
    this.pauseTime = pauseTime;
    this.frameCounter = frameCounter;
    this.globalTime = globalTime;
    this.globalDeltaTime = globalDeltaTime;
    this.localDeltaTime = localDeltaTime;
    this.localTime = localTime;
    this.fps = fps;
    this.isPause = isPause;
  }
}

export function getTimeContext(): TimeContext {
  return new TimeContext(startTime, oldTime, oldTimeFPS, pauseTime, frameCounter,
    globalTime, globalDeltaTime, localDeltaTime, localTime, fps, isPause);
}


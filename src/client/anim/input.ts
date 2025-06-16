export class InputContext {
  keysOld: boolean[] = new Array(256).fill(false);
  keys: boolean[] = new Array(256).fill(false);
  keysClick: boolean[] = new Array(256).fill(false);
  shiftKey: boolean = false;
  altKey: boolean = false;
  ctrlKey: boolean = false;

  mx: number = 0; my: number = 0; mz: number = 0;
  mdx: number = 0; mdy: number = 0; mdz: number = 0;

  constructor() { }
}

const input: InputContext = new InputContext();

function onKeyDown(e: KeyboardEvent) {
  if (e.code != "F12" && e.code != "F11" && e.code != "KeyR") {
    e.preventDefault();
  }
  input.keysOld[e.key.charCodeAt(0)] = input.keys[e.key.charCodeAt(0)];
  input.keys[e.key.charCodeAt(0)] = true;
  input.keysClick[e.key.charCodeAt(0)] = !input.keysOld[e.key.charCodeAt(0)] && input.keys[e.key.charCodeAt(0)];

  input.shiftKey = e.shiftKey;
  input.altKey = e.altKey;
  input.ctrlKey = e.ctrlKey;
}

function onKeyUp(e: KeyboardEvent) {
  if (e.code != "F12" && e.code != "F11" && e.code != "KeyR") {
    e.preventDefault();
  }
  input.keysOld[e.key.charCodeAt(0)] = input.keys[e.key.charCodeAt(0)];
  input.keys[e.key.charCodeAt(0)] = false;
  input.keysClick[e.key.charCodeAt(0)] = false;

  input.shiftKey = e.shiftKey;
  input.altKey = e.altKey;
  input.ctrlKey = e.ctrlKey;
}

function onMouseMove(e: MouseEvent) {
  if (input.mx == 0 && input.my == 0) {
    input.mx = e.clientX;
    input.my = e.clientY;
  }
  input.mdx = e.clientX - input.mx;
  input.mdy = e.clientY - input.my;
  input.mx = e.clientX;
  input.my = e.clientY;
}

function onMouseWheel(e: WheelEvent) {
  input.mdz = e.deltaY;
  input.mz += input.mdz;
}

export function inputInit() {
  window.addEventListener('keydown', (e) => onKeyDown(e));
  window.addEventListener('keyup', (e) => onKeyUp(e));
  window.addEventListener('mousemove', (e) => onMouseMove(e));
  window.addEventListener('wheel', (e) => onMouseWheel(e));
}

export function getInputContext(): InputContext {
  return input;
}
import { loadTextFromFile } from "../../../utils.js";

async function shdProgCreate(shdFileNamePrefix: string): Promise<WebGLProgram> {
  let program: WebGLProgram = window.gl.createProgram();

  const shdNames: string[] = [
    "vert",
    "frag"
  ];
  const shdTypes: number[] = [
    window.gl.VERTEX_SHADER,
    window.gl.FRAGMENT_SHADER
  ];
  const shdHeaders: string[] = [
    "#version 300 es\nprecision highp float;\n#define VERTEX_SHADER 1\n",
    "#version 300 es\nprecision highp float;\n#define FRAGMENT_SHADER 1\n"
  ];

  for (let i: number = 0; i < shdNames.length; i++) {
    const shdPath: string = "bin/shaders/" + shdFileNamePrefix + "/" + shdNames[i] + ".glsl";
    let shdString: string = await loadTextFromFile(shdPath);
    shdString = `${shdHeaders[i]}${shdString}`;

    const shader: WebGLShader | null = window.gl.createShader(shdTypes[i]);
    if (shader === null) {
      return new WebGLShader();
    }
    else {
      window.gl.shaderSource(shader, shdString);
      window.gl.compileShader(shader);

      if (!window.gl.getShaderParameter(shader, window.gl.COMPILE_STATUS)) {
        alert(window.gl.getShaderInfoLog(shader));
      } else {
        console.log("Loaded shader: " + shdPath);
      }
      window.gl.attachShader(program, shader);
    }
  }
  window.gl.linkProgram(program);
  if (!window.gl.getProgramParameter(program, window.gl.LINK_STATUS)) {
    alert("Program linkage error");
  }
  else {
    console.log("Created shader pack: " + shdFileNamePrefix);
  }
  return program;
}

const shdList: Shader[] = [];

export class Shader {
  name: string;
  program!: WebGLProgram;

  constructor(shdFileNamePrefix: string) {
    this.name = shdFileNamePrefix;
  }

  async init() {
    this.program = await shdProgCreate(this.name);
    shdList.push(this);
  }
}

export function shdGetDefault(): Shader {
  return shdList[0];
}

export function shdGetByName(name: string) {
  for (let i = 1; i < shdList.length; i++) {
    if (shdList[i].name == name)
      return shdList[i];
  }
  return shdGetDefault();
}

export async function shdInit() {
  await new Shader("default").init();
  await new Shader("skybox").init();
}

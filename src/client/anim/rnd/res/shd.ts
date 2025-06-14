import {loadTextFromFile} from "../../../utils.js";

/* function loadShader(shaderStr: string, type: number) : WebGLShader | null {
  const shader = window.gl.createShader(type);        

  if (shader != null) {
    window.gl.shaderSource(shader, shaderStr);
    window.gl.compileShader(shader);

    if (!window.gl.getShaderParameter(shader, window.gl.COMPILE_STATUS)) {
      alert(window.gl.getShaderInfoLog(shader));
    } 

    return shader;
  }
  return null;    
} */

async function shdCreate(shdFileNamePrefix: string) : Promise<WebGLProgram> {
  let program: WebGLProgram = window.gl.createProgram();

  const shdNames: string[] = ["vert", "frag"];
  const shdTypes: number[] = [window.gl.VERTEX_SHADER, window.gl.FRAGMENT_SHADER];
  const shdHeaders: string[] =
  ["#version 300 es\nprecision highp float;\n#define VERTEX_SHADER 1\n",
    "#version 300 es\nprecision highp float;\n#define FRAGMENT_SHADER 1\n"
  ];

  for (let i = 0; i < shdNames.length; i++) {
    let shdPath: string = "bin/shaders/" + shdFileNamePrefix + "/" + shdNames[i] + ".glsl";
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

let shaders: Shader[] = [];

export class Shader {
  name: string;
  program!: WebGLProgram;
  vertString: string = "";
  fragString: string = "";
  constructor(shdFileNamePrefix: string) {
    this.name = shdFileNamePrefix;                                   
  }

  async init() {
    this.program = await shdCreate(this.name);

    const shdNames: string[] = ["vert", "frag"];
    //const shdTypes: number[] = [window.gl.VERTEX_SHADER, window.gl.FRAGMENT_SHADER];
    const shdHeaders: string[] =
    ["#version 300 es\nprecision highp float;\n#define VERTEX_SHADER 1\n",
      "#version 300 es\nprecision highp float;\n#define FRAGMENT_SHADER 1\n"
    ];
    
    let shdVertPath: string = "bin/shaders/" + this.name + "/" + shdNames[0] + ".glsl";
    let shdVertString: string = await loadTextFromFile(shdVertPath);
    shdVertString = `${shdHeaders[0]}${shdVertString}`;
    this.vertString = shdVertString;

    let shdFragPath: string = "bin/shaders/" + this.name + "/" + shdNames[1] + ".glsl";
    let shdFragString: string = await loadTextFromFile(shdFragPath);
    shdFragString = `${shdHeaders[1]}${shdFragString}`;
    this.fragString = shdFragString;

    shaders.push(this);
  }
}

export function shdGetDefault() : Shader {
  return shaders[0];
}

export function shdGetByName(name: string) {
  for (let i = 1; i < shaders.length; i++) {
    if (shaders[i].name == name)
      return shaders[i];
  }
  return shdGetDefault();
}

export async function shdInit() {
  console.log("Shaders initializing");
  await new Shader("default").init();
}

export function shdClose() {
  while (shaders.length > 0) {
    shaders.pop();
  }
}

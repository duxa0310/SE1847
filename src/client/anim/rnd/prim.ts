import { loadTextFromFile } from "../../main.js";
import { vec2, vec3, vec4 } from "../../mth/mth.ts"
import * as mth from "../../mth/mth.ts"
import { Material } from "./res/mtl.ts"

export class Vertex {
  position: vec3;
  texCoord: vec2;
  normal: vec3;
  color: vec4;

  constructor(position: vec3, texCoord: vec2, normal: vec3, color: vec4) {
    this.position = structuredClone(position);
    this.texCoord = structuredClone(texCoord);
    this.normal = structuredClone(normal);
    this.color = structuredClone(color);
  }

  toList(): number[] {
    return this.position.toList().concat(
      this.texCoord.toList(),
      this.normal.toList(),
      this.color.toList()
    );
  }

  toArray(): Float32Array {
    const list: number[] = this.position.toList()
      .concat(this.texCoord.toList())
      .concat(this.normal.toList())
      .concat(this.color.toList());
    return new Float32Array(list);
  }
}

function vertexArrayToFloatArray(vertices: Vertex[]) {
  let list: number[] = [];
  for (let i: number = 0; i < vertices.length; i++) {
    list = list.concat(vertices[i].toList());
  }
  return new Float32Array(list);
}

export class Primitive {
  glType: number;
  mtl: Material;
  vA!: WebGLVertexArrayObject;
  vBuf!: WebGLBuffer;
  iBuf!: WebGLBuffer;
  numOfElements: number;

  constructor(glType: number, mtl: Material, vertices: Vertex[], indices: number[]) {
    this.glType = glType;
    this.mtl = structuredClone(mtl);
    if (vertices.length > 0) {
      this.vBuf = window.gl.createBuffer();
      this.vA = window.gl.createVertexArray();

      window.gl.bindVertexArray(this.vA);
      window.gl.bindBuffer(window.gl.ARRAY_BUFFER, this.vBuf);
      window.gl.bufferData(window.gl.ARRAY_BUFFER, vertexArrayToFloatArray(vertices), window.gl.STATIC_DRAW);
      window.gl.bindBuffer(window.gl.ARRAY_BUFFER, this.vBuf);

      window.gl.enableVertexAttribArray(0);
      window.gl.enableVertexAttribArray(1);
      window.gl.enableVertexAttribArray(2);
      window.gl.enableVertexAttribArray(3);

      window.gl.vertexAttribPointer(0, 3, window.gl.FLOAT, false, 48, 0);  /* p */
      window.gl.vertexAttribPointer(1, 2, window.gl.FLOAT, false, 48, 12); /* t */
      window.gl.vertexAttribPointer(2, 3, window.gl.FLOAT, false, 48, 20); /* n */
      window.gl.vertexAttribPointer(3, 4, window.gl.FLOAT, false, 48, 32); /* c */
    }
    if (indices.length > 0) {
      this.iBuf = window.gl.createBuffer();
      window.gl.bindBuffer(window.gl.ELEMENT_ARRAY_BUFFER, this.iBuf);
      window.gl.bufferData(window.gl.ELEMENT_ARRAY_BUFFER, new Int32Array(indices), window.gl.STATIC_DRAW);
      this.numOfElements = indices.length;
    }
    else {
      this.numOfElements = vertices.length;
    }
  }
}

export function primCreate(glType: number, mtl: Material, vertices: Vertex[], indices: number[]) {
  return new Primitive(glType, mtl, vertices, indices);
}

export async function primCreateFromOBJ(url: string, mtl: Material): Promise<Primitive> {
  const modelSrc: string = await loadTextFromFile(url);
  const lines: string[] = modelSrc.split("\n");
  const isSpace: Function = function (c: string) { return c == ' ' || c == '\n' || c == '\t'; };

  let nV: number = 0, nF: number = 0, nI: number = 0;
  let v: number = 0, f: number = 0, vn: number = 0;

  for (let i: number = 0; i < lines.length; i++) {
    const line: string = lines[i];
    if (line[0] == 'v' && line[1] == ' ') {
      nV++;
    } else if (line[0] == 'f' && line[1] == ' ') {
      let n: number = 0;
      for (let j = 2; j < line.length; j++) {
        if (!isSpace(line[j]) && isSpace(line[j - 1])) {
          n++;
        }
      }
      nF += n - 2;
    }
  }
  nI = nF * 3;
  const vertices = new Array<Vertex>(nV), indices = new Array(nI);

  for (let j = 0; j < lines.length; j++) {
    const line: string = lines[j];
    if (line[0] == 'v' && line[1] == ' ') {
      if (vertices[v] == undefined) {
        vertices[v] = new Vertex(new vec3(0, 0, 0), new vec2(0, 0), new vec3(0, 0, 0), new vec4(1, 1, 1, 1));
      }
      const nums: number[] = line.substring(2).split(' ').map((c) => parseFloat(c));
      vertices[v++].position = mth.vec3Set(nums[0], nums[1], nums[2]);
    } else if (line[0] == 'v' && line[1] == 'n' && line[2] == ' ') {
      if (vertices[vn] == undefined) {
        vertices[vn] = new Vertex(new vec3(0, 0, 0), new vec2(0, 0), new vec3(0, 0, 0), new vec4(1, 1, 1, 1));
      }
      const nums: number[] = line.substring(3).split(' ').map((c) => parseFloat(c));
      vertices[vn++].normal = mth.vec3Set(nums[0], nums[1], nums[2]);
    } else if (line[0] == 'f' && line[1] == ' ') {
      let n: number = 0, c: number = 0, c0: number = 0, c1: number = 0;
      for (let i: number = 2; i < line.length; i++) {
        if (!isSpace(line[i]) && isSpace(line[i - 1])) {
          c = parseInt(line.substring(i).split("(\s|\\\\)")[0]);
          if (c < 0) {
            c += v;
          } else {
            c--;
          }
          if (n == 0) {
            c0 = c;
          } else if (n == 1) {
            c1 = c;
          } else {
            indices[f++] = c0;
            indices[f++] = c1;
            indices[f++] = c;
            c1 = c;
          }
          n++;
        }
      }
    }
  }
  return new Primitive(window.gl.TRIANGLES, mtl, vertices, indices);
}
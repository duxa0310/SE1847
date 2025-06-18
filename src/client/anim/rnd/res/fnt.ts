import * as mth from "../../../mth/mth.ts";
import * as prim from "../prim";
import { Material, mtlCreate } from "./mtl.ts";
import { shdGetByName } from "./shd.ts";

const fontPrims: Map<string, prim.Primitive> = new Map();

export function fontDrawString(str: string, trans: mth.mat4) {
}

export function fontInit() {
  const verticesIndices: Map<string, {
    vertices: prim.Vertex[], 
    indices: number[]
  }> = new Map();

  const chars: string[] = [
    '☺', '☻', '♥', '♦', '♣', '♠', '•', '◘', '○', '◙', '♂', '♀', '♪', '♫', '☼', 
    '►', '◄', '↕', '‼', '¶', '§', '▬', '↨', '↑', '↓', '→', '←', '∟', '↔', '▲', 
    '▼', ' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', 
    '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', 
    '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
    '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z', '{', '|', '}', '~', '⌂', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 
    'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 
    'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'а', 'б', 'в', 'г', 'д', 
    'е', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', '░', '▒', '▓', '│', 
    '┤', '╡', '╢', '╖', '╕', '╣', '║', '╗', '╝', '╜', '╛', '┐', '└', '┴', '┬', 
    '├', '─', '┼', '╞', '╟', '╚', '╔', '╩', '╦', '╠', '═', '╬', '╧', '╨', '╤', 
    '╥', '╙', '╘', '╒', '╓', '╫', '╪', '┘', '┌', '█', '▄', '▌', '▐', '▀', 'р', 
    'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 
    'Ё', 'ё', 'Є', 'є', 'Ї', 'ї', 'Ў', 'ў', '°', 's', '·', '√', '№', '¤', '■'
  ];

  const fontMtl: Material = mtlCreate("Font material", mth.vec3Set1(1), mth.vec3Set1(0), mth.vec3Set1(0),
    0, 1, shdGetByName("font"));

  verticesIndices.set(`☺`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ], 
    indices: [0,1,2,2,1,3,4,5,6,6,5,7,8,9,10]
  });

  verticesIndices.set(`☻`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3,4,5,6,6,5,7,8,9,10,11,12,5]
  });

  verticesIndices.set(`♥`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3,4,5,6,6,5,7,8,9,10,8,10,11]
  });

  verticesIndices.set(`♦`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,8,5,6,7,1,3,8,2,4,8,8,5,1,8,6,2]
  });

  verticesIndices.set(`♣`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,5,7,4,5,8,5,6,7,5,6,8]
  });

  verticesIndices.set(`♠`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,5,6,4,5,7,1,3,6,2,4,7]
  });

  verticesIndices.set(`•`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3]
  });

  verticesIndices.set(`◘`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`○`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0))
    ],
    indices: [0,1,2,2,1,3,4,5,6,6,5,7,8,9,10,10,9,11]
  });

  verticesIndices.set(`◙`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(0))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`♂`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,6,7,5,8,9,5,10,11,5]
  });

  verticesIndices.set(`♀`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3,4,5,8,6,7,8]
  });

  verticesIndices.set(`♪`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`♫`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7,8,9,10,10,8,11]
  });

  verticesIndices.set(`☼`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,8,1,2,8,3,4,8,5,6,8,7]
  });

  verticesIndices.set(`►`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`◄`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`↑`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,1,2]
  });

  verticesIndices.set(`↓`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,1,2]
  });

  verticesIndices.set(`→`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,0,1,3]
  });

  verticesIndices.set(`←`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,0,1,3]
  });

  verticesIndices.set(`∟`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,0,2,3,3,4,5]
  });

  verticesIndices.set(`↔`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,5,6,7]
  });

  verticesIndices.set(`▲`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`▼`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`!`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,3,3,5,2]
  });

  verticesIndices.set(`"`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`#`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7,8,9,10,10,8,11,12,13,14,14,12,15]
  });

  verticesIndices.set(`$`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3,4,5,6,6,4,7,8,9,10,10,9,11,12,13,14,14,13,15]
  });

  verticesIndices.set(`%`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7,8,9,10,10,9,11]
  });

  verticesIndices.set(`&`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3,3,4,5,5,6,7,7,8,9,9,10,11,11,12,0,13,14,15,15,16,17]
  });

  verticesIndices.set(`'`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3]
  });

  verticesIndices.set(`(`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,3]
  });

  verticesIndices.set(`)`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,3]
  });

  verticesIndices.set(`*`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`+`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`,`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3]
  });

  verticesIndices.set(`-`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3]
  });

  verticesIndices.set(`.`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3]
  });

  verticesIndices.set(`/`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,1,3]
  });

  verticesIndices.set(`0`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,8]
  });

  verticesIndices.set(`1`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2.5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2.5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2.5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1.5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3.5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,2,5,6,7]
  });

  verticesIndices.set(`2`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8]
  });

  verticesIndices.set(`3`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,12]
  });

  verticesIndices.set(`4`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,3,2]
  });

  verticesIndices.set(`5`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,11,11,5,6,6,7,8,8,9,10,10,6,8]
  });

  verticesIndices.set(`6`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,4,4,12,8]
  });

  verticesIndices.set(`7`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`8`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,12,12,13,14,14,15,8]
  });

  verticesIndices.set(`9`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,12,12,13,8]
  });

  verticesIndices.set(`:`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`;`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7,7,8,6]
  });

  verticesIndices.set(`<`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`=`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,0,3,4,5,6,6,4,7]
  });

  verticesIndices.set(`>`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`?`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,6,7,8]
  });

  verticesIndices.set(`@`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,12,12,13,14,14,15,8]
  });

  verticesIndices.set(`A`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,3,4,7,8,6,6,2,7]
  });

  verticesIndices.set(`B`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,6,7,8,8,9,10,10,11,6]
  });

  verticesIndices.set(`C`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`D`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`E`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`F`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,0,0,3,8]
  });

  verticesIndices.set(`G`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,3,3,4,8]
  });

  verticesIndices.set(`H`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`I`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,4,10,11,0,0,3,10]
  });

  verticesIndices.set(`J`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,0,2,7]
  });

  verticesIndices.set(`K`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,5,6,7,7,8,2,2,9,10]
  });

  verticesIndices.set(`L`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`M`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,2,2,8,9]
  });

  verticesIndices.set(`N`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,2,2,8,9]
  });

  verticesIndices.set(`O`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,8]
  });

  verticesIndices.set(`P`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,6,7,8,8,9,6]
  });

  verticesIndices.set(`Q`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,8]
  });

  verticesIndices.set(`R`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,6,7,8,8,9,10,10,11,12,12,13,0]
  });

  verticesIndices.set(`S`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,12]
  });

  verticesIndices.set(`T`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,8]
  });

  verticesIndices.set(`U`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`V`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5]
  });

  verticesIndices.set(`W`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,6,7,8,8,9,2,2,5,8]
  });

  verticesIndices.set(`X`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,6,7,8,9,10,11]
  });

  verticesIndices.set(`Y`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,6,7,8,8,5,2]
  });

  verticesIndices.set(`Z`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`[`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`\\`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0]
  });

  verticesIndices.set(`]`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`^`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`_`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0]
  });

  verticesIndices.set("`", {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`a`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,9,9,10,3]
  });

  verticesIndices.set(`b`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`c`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`d`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`e`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,5,6,7,7,8,9,9,10,5]
  });

  verticesIndices.set(`f`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,9,9,3,10,10,11,12,12,13,10]
  });

  verticesIndices.set(`g`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,-1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,-3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,-3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,-1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,9,9,10,11,11,0,3]
  });

  verticesIndices.set(`h`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,0]
  });

  verticesIndices.set(`i`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`j`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,11,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,4]
  });

  verticesIndices.set(`k`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,5,6,7,7,8,2,2,9,10]
  });

  verticesIndices.set(`l`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,0,3]
  });

  verticesIndices.set(`m`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,12,12,4]
  });

  verticesIndices.set(`n`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,4]
  });

  verticesIndices.set(`o`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`p`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,-4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,-4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`q`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(5,-4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,-4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`r`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`s`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,5,6,7,7,8,9,9,4,5]
  });

  verticesIndices.set(`t`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`u`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,2]
  });

  verticesIndices.set(`v`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2]
  });

  verticesIndices.set(`w`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4]
  });

  verticesIndices.set(`x`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,0,3,1]
  });

  verticesIndices.set(`y`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,11,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,11,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,1,3,6,3,4,5,5,6,3]
  });

  verticesIndices.set(`z`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,3,3,2,0,4,5,1,1,0,4]
  });

  verticesIndices.set(`{`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`|`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0]
  });

  verticesIndices.set(`}`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`~`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4]
  });

  verticesIndices.set(`⌂`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,0,4,1]
  });

  verticesIndices.set(`А`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,6,7,4]
  });

  verticesIndices.set(`Б`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,5,6,7,7,8,9,9,10,11,11,0,5]
  });

  verticesIndices.set(`В`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,10,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,10,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,12,13,7]
  });

  verticesIndices.set(`Г`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,0,3]
  });

  verticesIndices.set(`Д`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,3]
  });

  verticesIndices.set(`Е`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,3,8,9,10,10,11,0]
  });

  verticesIndices.set(`Ж`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,2,11,5,5,8,2]
  });

  verticesIndices.set(`З`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,12,12,5,6]
  });

  verticesIndices.set(`И`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,2,2,8,9,9,0,2]
  });

  verticesIndices.set(`Й`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,2,2,8,9,9,0,2,10,11,12]
  });

  verticesIndices.set(`К`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,5,6,7,7,8,2,2,9,10]
  });

  verticesIndices.set(`Л`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,0,2]
  });

  verticesIndices.set(`М`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,2,2,8,9,9,0,2]
  });

  verticesIndices.set(`Н`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,2,9,8,8,3,2]
  });

  verticesIndices.set(`О`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,8]
  });

  verticesIndices.set(`П`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`Р`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,5,6,7,7,0,5,0,8,1]
  });

  verticesIndices.set(`С`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`Т`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`У`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,9,9,0,3]
  });

  verticesIndices.set(`Ф`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,12,13,14,14,15,12]
  });

  verticesIndices.set(`Х`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,2,11,5,5,8,2]
  });

  verticesIndices.set(`Ц`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,1,4,7,7,2,1,8,9,10,10,11,8]
  });

  verticesIndices.set(`Ч`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,2,9,8,8,3,2]
  });

  verticesIndices.set(`Ш`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`Щ`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(9,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(9,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12]
  });

  verticesIndices.set(`Ъ`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`Ь`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,4]
  });

  verticesIndices.set(`Ы`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`Э`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,4,10,1,2]
  });

  verticesIndices.set(`Ю`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4,1,12,11,11,4,1,12,13,10,10,9,12]
  });

  verticesIndices.set(`Я`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0,6,7,8,8,9,6,10,11,12,12,13,1,1,0,10]
  });

  verticesIndices.set(`а`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,3,4,5,5,6,7,7,8,9,9,10,3]
  });

  verticesIndices.set(`б`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,2]
  });

  verticesIndices.set(`в`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,3]
  });

  verticesIndices.set(`г`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`д`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`е`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`ж`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,5,6,7,7,8,9,9,10,11,11,12,13,13,2,3]
  });

  verticesIndices.set(`з`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,12,12,13,0]
  });

  verticesIndices.set(`и`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,1,4,7,7,2,1]
  });

  verticesIndices.set(`й`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,1,4,7,7,2,1,8,9,8]
  });

  verticesIndices.set(`к`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,3,4,5,5,6,7,7,8,2,2,9,10]
  });

  verticesIndices.set(`л`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,0,2]
  });

  verticesIndices.set(`м`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,0,2,7,6]
  });

  verticesIndices.set(`н`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,2,9,8]
  });

  verticesIndices.set(`о`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`п`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,0]
  });

  verticesIndices.set(`р`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,0,2]
  });

  verticesIndices.set(`с`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`т`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`у`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`ф`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,9,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,8]
  });

  verticesIndices.set(`х`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,2,5]
  });

  verticesIndices.set(`ц`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,8]
  });

  verticesIndices.set(`ч`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`ш`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`щ`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,12,12,8,13]
  });

  verticesIndices.set(`ъ`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`ы`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`ь`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`э`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`ю`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(8,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,8,8,9,10,10,11,4]
  });

  verticesIndices.set(`я`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`Ё`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0,12,13,12]
  });

  verticesIndices.set(`ё`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,8]
  });

  verticesIndices.set(`Є`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`є`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`Ї`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,8,10,11,10]
  });

  verticesIndices.set(`ї`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(9,-2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,8,10,11,10]
  });

  verticesIndices.set(`Ў`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4]
  });

  verticesIndices.set(`ў`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,8,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8]
  });

  verticesIndices.set(`°`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0]
  });

  verticesIndices.set(`s`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,8,8,9,10,10,11,0]
  });

  verticesIndices.set(`·`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(2,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0]
  });

  verticesIndices.set(`√`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,0]
  });

  verticesIndices.set(`№`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(7,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(3,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,3,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,4,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16]
  });

  verticesIndices.set(`¤`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(1,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,1,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(5,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(1,6,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(4,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(2,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,5,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,2,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,4,4,5,6,6,7,0,8,9,10,10,11,12,12,13,14,14,15,8]
  });

  verticesIndices.set(`■`, {
    vertices: [
      new prim.Vertex(mth.vec3Set(0,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,0,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(6,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1)),
      new prim.Vertex(mth.vec3Set(0,7,0), mth.vec2Set1(0), mth.vec3Set(0,0,1), mth.vec4Set1(1))
    ],
    indices: [0,1,2,2,3,0]
  });

  for(let i: number = 0; i < chars.length; i++) {
    const vertexIndex: { vertices: prim.Vertex[], indices: number[] } = verticesIndices.get(chars[i]) || { vertices: [], indices: [] };
    const pr: prim.Primitive = prim.primCreate(window.gl.TRIANGLES, fontMtl, 
      vertexIndex.vertices, vertexIndex.indices);
    fontPrims.set(chars[i], pr);
  }
}
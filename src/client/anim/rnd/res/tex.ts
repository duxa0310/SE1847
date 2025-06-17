/** SE1847: Textures, 17.06.2025 */
import * as shd from "./shd.ts"
export class Texture {
  name: string;
  w!: number;
  h!: number;
  id!: WebGLTexture;
  glType!: number;
  isMipmap!: boolean;

  constructor(name: string, w: number, h: number, id: WebGLTexture, glType: number, isMipmap: boolean) {
    this.name = name;
    this.w = w;
    this.h = h;
    this.id = id;
    this.glType = glType;
    this.isMipmap = isMipmap;
  }
}

export function texLoad(name: string, fileName: string, w: number, h: number): Texture {
  let tex: Texture = new Texture(name, w, h, window.gl.TEXTURE_2D, window.gl.RGBA, true);

  const texture: WebGLTexture = window.gl.createTexture();
  window.gl.pixelStorei(window.gl.UNPACK_FLIP_Y_WEBGL, true);
  window.gl.bindTexture(window.gl.TEXTURE_2D, texture);

  window.gl.texImage2D(
    window.gl.TEXTURE_2D,
    0,
    window.gl.RGBA,
    1,
    1,
    0,
    window.gl.RGBA,
    window.gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 255, 255]),
  );

  const image: HTMLImageElement = new Image();
  image.src = fileName;
  image.onload = () => {
    window.gl.texImage2D(
      window.gl.TEXTURE_2D,
      0,
      window.gl.RGBA,
      window.gl.RGBA,
      window.gl.UNSIGNED_BYTE,
      image,
    );
    window.gl.generateMipmap(window.gl.TEXTURE_2D);
    window.gl.texParameteri(window.gl.TEXTURE_2D, window.gl.TEXTURE_WRAP_S, window.gl.REPEAT);
    window.gl.texParameteri(window.gl.TEXTURE_2D, window.gl.TEXTURE_WRAP_T, window.gl.REPEAT);
    window.gl.texParameteri(window.gl.TEXTURE_2D, window.gl.TEXTURE_MIN_FILTER, window.gl.LINEAR_MIPMAP_LINEAR);
    window.gl.texParameteri(window.gl.TEXTURE_2D, window.gl.TEXTURE_MAG_FILTER, window.gl.LINEAR);
  };
  tex.id = texture;

  return tex;
}
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
  tex.id = texture;
  tex.glType = window.gl.TEXTURE_2D;
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
    window.gl.bindTexture(tex.glType, tex.id);
    window.gl.pixelStorei(window.gl.UNPACK_FLIP_Y_WEBGL, true);
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

  return tex;
}

export function createCubeMap(fileName: string): Texture {
  let tex: Texture = new Texture("bin/textures/skyboxes/" + fileName + "/", 1, 1, window.gl.TEXTURE_CUBE_MAP, window.gl.RGBA, true);

  tex.id = window.gl.createTexture();

  tex.glType = window.gl.TEXTURE_CUBE_MAP;
  window.gl.bindTexture(tex.glType, tex.id);
  const sideInfos = [
    { target: window.gl.TEXTURE_CUBE_MAP_POSITIVE_X, fileName: "posx.bmp" },
    { target: window.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, fileName: "negx.bmp" },
    { target: window.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, fileName: "posy.bmp" },
    { target: window.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, fileName: "negy.bmp" },
    { target: window.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, fileName: "posz.bmp" },
    { target: window.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, fileName: "negz.bmp" },
  ];

  window.gl.bindTexture(tex.glType, tex.id);
  sideInfos.forEach((side) => {
    const { target, fileName } = side;
    window.gl.texImage2D(target, 0, window.gl.RGBA, 1, 1, 0, window.gl.RGBA, window.gl.UNSIGNED_BYTE, new Uint8Array([255, 255, 255, 0]));
  });
  window.gl.generateMipmap(window.gl.TEXTURE_CUBE_MAP);

  let is_first = true;
  sideInfos.forEach((side) => {
    const { target, fileName } = side;
    window.gl.bindTexture(tex.glType, tex.id);
    const img = new Image();
    img.src = tex.name + fileName;
    img.onload = () => {
      window.gl.bindTexture(tex.glType, tex.id);
      if (is_first) {
        is_first = false;
        sideInfos.forEach((side) => {
          const { target, fileName } = side;
          window.gl.texImage2D(target, 0, window.gl.RGBA, img.width, img.height, 0, window.gl.RGBA, window.gl.UNSIGNED_BYTE, null);
        });
        window.gl.generateMipmap(window.gl.TEXTURE_CUBE_MAP);
      }
      window.gl.pixelStorei(window.gl.UNPACK_FLIP_Y_WEBGL, false);
      window.gl.texImage2D(target, 0, window.gl.RGBA, window.gl.RGBA, window.gl.UNSIGNED_BYTE, img);
      window.gl.pixelStorei(window.gl.UNPACK_FLIP_Y_WEBGL, true);
      window.gl.generateMipmap(window.gl.TEXTURE_CUBE_MAP);
    };
  });
  window.gl.generateMipmap(window.gl.TEXTURE_CUBE_MAP);
  window.gl.texParameteri(window.gl.TEXTURE_CUBE_MAP, window.gl.TEXTURE_MIN_FILTER, window.gl.LINEAR_MIPMAP_LINEAR);
  window.gl.texParameteri(window.gl.TEXTURE_CUBE_MAP, window.gl.TEXTURE_MAG_FILTER, window.gl.LINEAR);
  window.gl.texParameteri(window.gl.TEXTURE_CUBE_MAP, window.gl.TEXTURE_WRAP_S, window.gl.CLAMP_TO_EDGE);
  window.gl.texParameteri(window.gl.TEXTURE_CUBE_MAP, window.gl.TEXTURE_WRAP_T, window.gl.CLAMP_TO_EDGE);
  window.gl.texParameteri(window.gl.TEXTURE_CUBE_MAP, window.gl.TEXTURE_WRAP_R, window.gl.CLAMP_TO_EDGE);

  return tex;
}
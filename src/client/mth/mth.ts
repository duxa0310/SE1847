/***
 * MATH CONSTANTS & CONVERTATION
 ***/

export const PI: number = 3.1415926535897932384626433832795;

export function degreesToRadians(a: number): number {
  return a * (PI / 180.0);
}

export const d2R: Function = degreesToRadians;

export function radiansToDegrees(a: number): number {
  return a * (180.0 / PI);
}

export const r2D: Function = radiansToDegrees;

/***
 * CLASSES DEFINITIONS
 ***/

export class vec2 {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toList(): number[] {
    return [this.x, this.y];
  }

  toArray(): Float32Array {
    return new Float32Array(this.toList());
  }
}

export class vec3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  toList(): number[] {
    return [this.x, this.y, this.z];
  }

  toArray(): Float32Array {
    return new Float32Array(this.toList());
  }
}

export class vec4 {
  x: number;
  y: number;
  z: number;
  w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  toList(): number[] {
    return [this.x, this.y, this.z, this.w];
  }

  toArray(): Float32Array {
    return new Float32Array(this.toList());
  }
}

export class mat3 {
  a: number[][];

  constructor(
    a00: number, a01: number, a02: number,
    a10: number, a11: number, a12: number,
    a20: number, a21: number, a22: number) {
    this.a = [
      [a00, a01, a02],
      [a10, a11, a12],
      [a20, a21, a22],
    ];
  }

  toList(): number[] {
    return [
      this.a[0][0], this.a[0][1], this.a[0][2],
      this.a[1][0], this.a[1][1], this.a[1][2],
      this.a[2][0], this.a[2][1], this.a[2][2],
    ];
  }

  toArray(): Float32Array {
    return new Float32Array(this.toList());
  }
}

export class mat4 {
  a: number[][];

  constructor(
    a00: number, a01: number, a02: number, a03: number,
    a10: number, a11: number, a12: number, a13: number,
    a20: number, a21: number, a22: number, a23: number,
    a30: number, a31: number, a32: number, a33: number) {
    this.a = [
      [a00, a01, a02, a03],
      [a10, a11, a12, a13],
      [a20, a21, a22, a23],
      [a30, a31, a32, a33]
    ];
  }

  toList(): number[] {
    return [
      this.a[0][0], this.a[0][1], this.a[0][2], this.a[0][3],
      this.a[1][0], this.a[1][1], this.a[1][2], this.a[1][3],
      this.a[2][0], this.a[2][1], this.a[2][2], this.a[2][3],
      this.a[3][0], this.a[3][1], this.a[3][2], this.a[3][3]
    ];
  }

  toArray(): Float32Array {
    return new Float32Array(this.toList());
  }
}

/***
 * VECTOR MATH
 ***/

export function vec2Set(x: number, y: number): vec2 {
  return new vec2(x, y);
}

export function vec2Set1(a: number): vec2 {
  return vec2Set(a, a);
}

export function vec4Set(x: number, y: number, z: number, w: number): vec4 {
  return new vec4(x, y, z, w);
}

export function vec4Set1(a: number): vec4 {
  return vec4Set(a, a, a, a);
}

export function vec3Set(x: number, y: number, z: number): vec3 {
  return new vec3(x, y, z);
}

export function vec3Set1(a: number): vec3 {
  return vec3Set(a, a, a);
}

export function vec3SetArray(arr: number[]): vec3 {
  return vec3Set(arr[0], arr[1], arr[2]);
}

export function vec3AddVec3(v1: vec3, v2: vec3): vec3 {
  return vec3Set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
}

export function vec3SubVec3(v1: vec3, v2: vec3): vec3 {
  return vec3Set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
}

export function vec3MulNum(v: vec3, n: number): vec3 {
  return vec3Set(v.x * n, v.y * n, v.z * n);
}

export function vec3MulVec3(v1: vec3, v2: vec3): vec3 {
  return vec3Set(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
}

export function vec3DivNum(v: vec3, n: number): vec3 {
  if (n == 0) {
    return vec3Set1(0);
  }
  return vec3Set(v.x / n, v.y / n, v.z / n);
}

export function vec3DivVec3(v1: vec3, v2: vec3): vec3 {
  if (v2.x == 0 || v2.y == 0 || v2.z == 0) {
    return vec3Set1(0);
  }
  return vec3Set(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
}

export function vec3Neg(v: vec3): vec3 {
  return vec3MulNum(v, -1);
}

export function vec3DotVec3(v1: vec3, v2: vec3): number {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

export function vec3CrossVec3(v1: vec3, v2: vec3): vec3 {
  return vec3Set(
    v1.y * v2.z - v1.z * v2.y,
    v1.z * v2.x - v1.x * v2.z,
    v1.x * v2.y - v1.y * v2.x
  );
}

export function vec3Len(v: vec3): number {
  return Math.sqrt(vec3DotVec3(v, v));
}

export function vec3Normalize(v: vec3): vec3 {
  const len = vec3Len(v);
  if (len == 0 || len == 1) {
    return v;
  } else {
    return vec3DivNum(v, len);
  }
}

export function vec3MulMat4(v: vec3, m: mat4): vec3 {
  const w = v.x * m.a[0][3] + v.y * m.a[1][3] + v.z * m.a[2][3] + m.a[3][3];

  return vec3DivNum(vec3Set(
    v.x * m.a[0][0] + v.y * m.a[1][0] + v.z * m.a[2][0] + m.a[3][0],
    v.x * m.a[0][1] + v.y * m.a[1][1] + v.z * m.a[2][1] + m.a[3][1],
    v.x * m.a[0][2] + v.y * m.a[1][2] + v.z * m.a[2][2] + m.a[3][2]
  ), w);
}

export function pointTransform(v: vec3, m: mat4): vec3 {
  return vec3Set(
    v.x * m.a[0][0] + v.y * m.a[1][0] + v.z * m.a[2][0] + m.a[3][0],
    v.x * m.a[0][1] + v.y * m.a[1][1] + v.z * m.a[2][1] + m.a[3][1],
    v.x * m.a[0][2] + v.y * m.a[1][2] + v.z * m.a[2][2] + m.a[3][2]
  );
}

export function vectorTransform(v: vec3, m: mat4): vec3 {
  return vec3Set(
    v.x * m.a[0][0] + v.y * m.a[1][0] + v.z * m.a[2][0],
    v.x * m.a[0][1] + v.y * m.a[1][1] + v.z * m.a[2][1],
    v.x * m.a[0][2] + v.y * m.a[1][2] + v.z * m.a[2][2]
  );
}

/***
 * MATRIX MATH
 ***/

export function mat3Set(
  a00: number, a01: number, a02: number,
  a10: number, a11: number, a12: number,
  a20: number, a21: number, a22: number): mat3 {
  return new mat3(
    a00, a01, a02,
    a10, a11, a12,
    a20, a21, a22,
  );
}

export function mat4Set(
  a00: number, a01: number, a02: number, a03: number,
  a10: number, a11: number, a12: number, a13: number,
  a20: number, a21: number, a22: number, a23: number,
  a30: number, a31: number, a32: number, a33: number): mat4 {
  return new mat4(
    a00, a01, a02, a03,
    a10, a11, a12, a13,
    a20, a21, a22, a23,
    a30, a31, a32, a33
  );
}

export function mat4Identity(): mat4 {
  return mat4Set(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

export function mat4Translate(t: vec3): mat4 {
  return mat4Set(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    t.x, t.y, t.z, 1
  );
}

export function mat4Scale(s: vec3): mat4 {
  return mat4Set(
    s.x, 0, 0, 0,
    0, s.y, 0, 0,
    0, 0, s.z, 0,
    0, 0, 0, 1
  );
}

export function mat4RotateX(angleInDegrees: number): mat4 {
  const
    s: number = Math.sin(degreesToRadians(angleInDegrees)),
    c: number = Math.cos(degreesToRadians(angleInDegrees));
  return mat4Set(
    1, 0, 0, 0,
    0, c, s, 0,
    0, -s, c, 0,
    0, 0, 0, 1
  );
}

export function mat4RotateY(angleInDegrees: number): mat4 {
  const
    s: number = Math.sin(degreesToRadians(angleInDegrees)),
    c: number = Math.cos(degreesToRadians(angleInDegrees));
  return mat4Set(
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, 0, 1
  );
}

export function mat4RotateZ(angleInDegrees: number): mat4 {
  const
    s: number = Math.sin(degreesToRadians(angleInDegrees)),
    c: number = Math.cos(degreesToRadians(angleInDegrees));
  return mat4Set(
    c, s, 0, 0,
    -s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}

export function mat4Rotate(angleInDegrees: number, r: vec3): mat4 {
  const
    s: number = Math.sin(degreesToRadians(angleInDegrees)),
    c: number = Math.cos(degreesToRadians(angleInDegrees)),
    x: number = r.x, y: number = r.y, z: number = r.z;
  return mat4Set(
    x * x * (1 - c) + c, x * y * (1 - c) + z * s, x * z * (1 - c) - y * s, 0,
    x * y * (1 - c) - z * s, y * y * (1 - c) + c, y * z * (1 - c) + x * s, 0,
    x * z * (1 - c) + y * s, y * z * (1 - c) - x * s, z * z * (1 - c) + c, 0,
    0, 0, 0, 1
  );
}

export function mat4MulMat4(m1: mat4, m2: mat4): mat4 {
  return mat4Set(
    m1.a[0][0] * m2.a[0][0] + m1.a[0][1] * m2.a[1][0] + m1.a[0][2] * m2.a[2][0] + m1.a[0][3] * m2.a[3][0],
    m1.a[0][0] * m2.a[0][1] + m1.a[0][1] * m2.a[1][1] + m1.a[0][2] * m2.a[2][1] + m1.a[0][3] * m2.a[3][1],
    m1.a[0][0] * m2.a[0][2] + m1.a[0][1] * m2.a[1][2] + m1.a[0][2] * m2.a[2][2] + m1.a[0][3] * m2.a[3][2],
    m1.a[0][0] * m2.a[0][3] + m1.a[0][1] * m2.a[1][3] + m1.a[0][2] * m2.a[2][3] + m1.a[0][3] * m2.a[3][3],
    m1.a[1][0] * m2.a[0][0] + m1.a[1][1] * m2.a[1][0] + m1.a[1][2] * m2.a[2][0] + m1.a[1][3] * m2.a[3][0],
    m1.a[1][0] * m2.a[0][1] + m1.a[1][1] * m2.a[1][1] + m1.a[1][2] * m2.a[2][1] + m1.a[1][3] * m2.a[3][1],
    m1.a[1][0] * m2.a[0][2] + m1.a[1][1] * m2.a[1][2] + m1.a[1][2] * m2.a[2][2] + m1.a[1][3] * m2.a[3][2],
    m1.a[1][0] * m2.a[0][3] + m1.a[1][1] * m2.a[1][3] + m1.a[1][2] * m2.a[2][3] + m1.a[1][3] * m2.a[3][3],
    m1.a[2][0] * m2.a[0][0] + m1.a[2][1] * m2.a[1][0] + m1.a[2][2] * m2.a[2][0] + m1.a[2][3] * m2.a[3][0],
    m1.a[2][0] * m2.a[0][1] + m1.a[2][1] * m2.a[1][1] + m1.a[2][2] * m2.a[2][1] + m1.a[2][3] * m2.a[3][1],
    m1.a[2][0] * m2.a[0][2] + m1.a[2][1] * m2.a[1][2] + m1.a[2][2] * m2.a[2][2] + m1.a[2][3] * m2.a[3][2],
    m1.a[2][0] * m2.a[0][3] + m1.a[2][1] * m2.a[1][3] + m1.a[2][2] * m2.a[2][3] + m1.a[2][3] * m2.a[3][3],
    m1.a[3][0] * m2.a[0][0] + m1.a[3][1] * m2.a[1][0] + m1.a[3][2] * m2.a[2][0] + m1.a[3][3] * m2.a[3][0],
    m1.a[3][0] * m2.a[0][1] + m1.a[3][1] * m2.a[1][1] + m1.a[3][2] * m2.a[2][1] + m1.a[3][3] * m2.a[3][1],
    m1.a[3][0] * m2.a[0][2] + m1.a[3][1] * m2.a[1][2] + m1.a[3][2] * m2.a[2][2] + m1.a[3][3] * m2.a[3][2],
    m1.a[3][0] * m2.a[0][3] + m1.a[3][1] * m2.a[1][3] + m1.a[3][2] * m2.a[2][3] + m1.a[3][3] * m2.a[3][3]
  );
}

export function mat4MulMat4MulMat4(m1: mat4, m2: mat4, m3: mat4): mat4 {
  return mat4MulMat4(mat4MulMat4(m1, m2), m3);
}

export function mat4Transpose(m: mat4): mat4 {
  return mat4Set(
    m.a[0][0], m.a[1][0], m.a[2][0], m.a[3][0],
    m.a[0][1], m.a[1][1], m.a[2][1], m.a[3][1],
    m.a[0][2], m.a[1][2], m.a[2][2], m.a[3][2],
    m.a[0][3], m.a[1][3], m.a[2][3], m.a[3][3]
  );
}

export function mat3Determ(m: mat3): number {
  return m.a[0][0] * m.a[1][1] * m.a[2][2] + m.a[0][1] * m.a[1][2] * m.a[2][0]
    + m.a[0][2] * m.a[1][0] * m.a[2][1] - m.a[0][0] * m.a[1][2] * m.a[2][1]
    - m.a[0][1] * m.a[1][0] * m.a[2][2] - m.a[0][2] * m.a[1][1] * m.a[2][0];
}

export function mat4Determ(m: mat4): number {
  return m.a[0][0] * mat3Determ(
    mat3Set(m.a[1][1], m.a[1][2], m.a[1][3],
      m.a[2][1], m.a[2][2], m.a[2][3],
      m.a[3][1], m.a[3][2], m.a[3][3])) +
    -m.a[0][1] * mat3Determ(mat3Set(m.a[1][0], m.a[1][2], m.a[1][3],
      m.a[2][0], m.a[2][2], m.a[2][3],
      m.a[3][0], m.a[3][2], m.a[3][3])) +
    m.a[0][2] * mat3Determ(mat3Set(m.a[1][0], m.a[1][1], m.a[1][3],
      m.a[2][0], m.a[2][1], m.a[2][3],
      m.a[3][0], m.a[3][1], m.a[3][3])) +
    -m.a[0][3] * mat3Determ(mat3Set(m.a[1][0], m.a[1][1], m.a[1][2],
      m.a[2][0], m.a[2][1], m.a[2][2],
      m.a[3][0], m.a[3][1], m.a[3][2]));
}

export function mat4Inverse(m: mat4): mat4 {
  const det: number = mat4Determ(m);
  const r: mat4 = mat4Identity();

  if (det == 0) {
    return r;
  }
  r.a[0][0] =
    mat3Determ(mat3Set(m.a[1][1], m.a[1][2], m.a[1][3],
      m.a[2][1], m.a[2][2], m.a[2][3],
      m.a[3][1], m.a[3][2], m.a[3][3])) / det;
  r.a[1][0] =
    -mat3Determ(mat3Set(m.a[1][0], m.a[1][2], m.a[1][3],
      m.a[2][0], m.a[2][2], m.a[2][3],
      m.a[3][0], m.a[3][2], m.a[3][3])) / det;
  r.a[2][0] =
    mat3Determ(mat3Set(m.a[1][0], m.a[1][1], m.a[1][3],
      m.a[2][0], m.a[2][1], m.a[2][3],
      m.a[3][0], m.a[3][1], m.a[3][3])) / det;
  r.a[3][0] =
    -mat3Determ(mat3Set(m.a[1][0], m.a[1][1], m.a[1][2],
      m.a[2][0], m.a[2][1], m.a[2][2],
      m.a[3][0], m.a[3][1], m.a[3][2])) / det;
  r.a[0][1] =
    -mat3Determ(mat3Set(m.a[0][1], m.a[0][2], m.a[0][3],
      m.a[2][1], m.a[2][2], m.a[2][3],
      m.a[3][1], m.a[3][2], m.a[3][3])) / det;
  r.a[1][1] =
    mat3Determ(mat3Set(m.a[0][0], m.a[0][2], m.a[0][3],
      m.a[2][0], m.a[2][2], m.a[2][3],
      m.a[3][0], m.a[3][2], m.a[3][3])) / det;
  r.a[2][1] =
    -mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][3],
      m.a[2][0], m.a[2][1], m.a[2][3],
      m.a[3][0], m.a[3][1], m.a[3][3])) / det;
  r.a[3][1] =
    mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][2],
      m.a[2][0], m.a[2][1], m.a[2][2],
      m.a[3][0], m.a[3][1], m.a[3][2])) / det;
  r.a[0][2] =
    mat3Determ(mat3Set(m.a[0][1], m.a[0][2], m.a[0][3],
      m.a[1][1], m.a[1][2], m.a[1][3],
      m.a[3][1], m.a[3][2], m.a[3][3])) / det;
  r.a[1][2] =
    -mat3Determ(mat3Set(m.a[0][0], m.a[0][2], m.a[0][3],
      m.a[1][0], m.a[1][2], m.a[1][3],
      m.a[3][0], m.a[3][2], m.a[3][3])) / det;
  r.a[2][2] =
    mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][3],
      m.a[1][0], m.a[1][1], m.a[1][3],
      m.a[3][0], m.a[3][1], m.a[3][3])) / det;
  r.a[3][2] =
    -mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][2],
      m.a[1][0], m.a[1][1], m.a[1][2],
      m.a[3][0], m.a[3][1], m.a[3][2])) / det;
  r.a[0][3] =
    -mat3Determ(mat3Set(m.a[0][1], m.a[0][2], m.a[0][3],
      m.a[1][1], m.a[1][2], m.a[1][3],
      m.a[2][1], m.a[2][2], m.a[2][3])) / det;
  r.a[1][3] =
    mat3Determ(mat3Set(m.a[0][0], m.a[0][2], m.a[0][3],
      m.a[1][0], m.a[1][2], m.a[1][3],
      m.a[2][0], m.a[2][2], m.a[2][3])) / det;
  r.a[2][3] =
    -mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][3],
      m.a[1][0], m.a[1][1], m.a[1][3],
      m.a[2][0], m.a[2][1], m.a[2][3])) / det;
  r.a[3][3] =
    mat3Determ(mat3Set(m.a[0][0], m.a[0][1], m.a[0][2],
      m.a[1][0], m.a[1][1], m.a[1][2],
      m.a[2][0], m.a[2][1], m.a[2][2])) / det;
  return r;
}

export function mat4View(loc: vec3, at: vec3, up1: vec3): mat4 {
  const
    dir: vec3 = vec3Normalize(vec3SubVec3(at, loc)),
    right: vec3 = vec3Normalize(vec3CrossVec3(dir, up1)),
    up: vec3 = vec3Normalize(vec3CrossVec3(right, dir));
  return mat4Set(
    right.x, up.x, -dir.x, 0,
    right.y, up.y, -dir.y, 0,
    right.z, up.z, -dir.z, 0,
    -vec3DotVec3(loc, right), -vec3DotVec3(loc, up), vec3DotVec3(loc, dir), 1
  );
}

export function mat4Ortho(l: number, r: number, b: number, t: number, n: number, f: number): mat4 {
  return mat4Set(
    2 / (r - l), 0, 0, 0,
    0, 2 / (t - b), 0, 0,
    0, 0, -2 / (f - n), 0,
    -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1
  );
}

export function mat4Frustum(l: number, r: number, b: number, t: number, n: number, f: number): mat4 {
  return mat4Set(
    2 * n / (r - l), 0, 0, 0,
    0, 2 * n / (t - b), 0, 0,
    (r + l) / (r - l), (t + b) / (t - b), -(f + n) / (f - n), -1,
    0, 0, -2 * n * f / (f - n), 0
  );
}

/***
 * PERLIN NOISE
 ***/

const tabBits: number = 8;
const tabSize: number = 1 << tabBits;
const tabMask: number = tabSize - 1;

let tabNoise: number[] = [];
let perm: number[] = [];

function index1(x: number): number { return perm[x & tabMask]; }
function index2(x: number, y: number): number { return perm[(x + index1(y)) & tabMask]; }
function index3(x: number, y: number, z: number): number { return perm[(x + index2(y, z)) & tabMask]; }
function index4(x: number, y: number, z: number, w: number): number { return perm[(x + index3(y, z, w)) & tabMask]; }

function noiseInit() {
  // for (let i: number = 0; i < tabSize; i++) {
  //   tabNoise[i] = Math.random();
  // }
  // for (let i: number = 0; i < tabSize; i++) {
  //   perm[i] = i;
  // }
  // for (let i: number = 0; i < tabSize * tabSize; i++) {
  //   let
  //     a: number = (Math.random() * tabMask) >> 0,
  //     b: number = (Math.random() * tabMask) >> 0,
  //     tmp: number = perm[a];
  //   perm[a] = perm[b];
  //   perm[b] = tmp;
  // }
  tabNoise = [
    0.76732831450225, 0.065758222236877, 0.8733335520102788, 0.8488021018947807, 0.022216720222719255, 0.16090459188457418, 0.5858880236735974, 0.9513680631951017, 0.8392718731173833, 0.629684888089773, 0.04090147105638886, 0.09799404412685009, 0.8304789820936346, 0.3502155869141368, 0.15156727270216186, 0.4463106062920562, 0.982861546093024, 0.8820488877758189, 0.9184819315183739, 0.8274985624757112, 0.28622639967246144, 0.2677839889145148, 0.9311991522438124, 0.6970602209250009, 0.48440446872418774, 0.8715564837981836, 0.6895133441722517, 0.9990442427056263, 0.1558724707891116, 0.6908834767079249, 0.3435252319483969, 0.7973380634877373, 0.9678498046168806, 0.71215839287755, 0.07949035834017304, 0.9606595860836227, 0.3238285942633182, 0.1855868606710538, 0.968237260162949, 0.16032563050921322, 0.5292416356142641, 0.4842768622635374, 0.31601966924966285, 0.6073631909189513, 0.4061166611745368, 0.38779728763202537, 0.33722502093716833, 0.37305447138307113, 0.5385368041661119, 0.38965675701002966, 0.9325365069527828, 0.7629848595755727, 0.034877034552256436, 0.17952835287567703, 0.17622080673619778, 0.9878623389802728, 0.5869137420831687, 0.7097705668214617, 0.9319617218548432, 0.2970955947220977, 0.941206222391847, 0.11558609557772836, 0.36519547081840154, 0.8025077384152259, 0.7934023199644307, 0.809234391751846, 0.9691516671832588, 0.12415732651730094, 0.7167136585247171, 0.750246676008055, 0.0871421029720949, 0.06889625426349633, 0.2871550484029378, 0.888471615302558, 0.6099769010312207, 0.8754125927710815, 0.40031090883632225, 0.44313717965595334, 0.8193665394980684, 0.45203431519452275, 0.8328288446074147, 0.052629111453059485, 0.4964325820888059, 0.42381627799307076, 0.6964481863825355, 0.6324342176932188, 0.5161145532056346, 0.632991781109402, 0.6949048059847504, 0.8903119944269264, 0.21622372059058226, 0.523971392979353, 0.26221756977068744, 0.6185183308518672, 0.9595996302187686, 0.13967771732553202, 0.30211209886296997, 0.8137859686843985, 0.5388388982284404, 0.23885080503781775, 0.002949505431377064, 0.9898496193094377, 0.7354187314906065, 0.3009734990346936, 0.9918873186309917, 0.9807485985783689, 0.11740332490779304, 0.6040953060732848, 0.3339104759156618, 0.3784123345311461, 0.9513727816738471, 0.9400187899406265, 0.7949882162854502, 0.6194666500199042, 0.30594653831787055, 0.6677809349076421, 0.943891924707197, 0.7772013173143437, 0.19763977559831136, 0.11347984767755459, 0.2570788766331642, 0.22706386448939953, 0.6339740100505081, 0.14541940064701542, 0.9894086554362619, 0.49004289842926063, 0.13613479118635097, 0.3032666259684349, 0.6279475319638358, 0.20739244848502758, 0.2626086166949586, 0.1269569851495339, 0.12070644680623344, 0.8689189694871591, 0.9270517234030118, 0.6762735911705974, 0.2236476204583412, 0.9712078322074866, 0.4548590893665436, 0.6736497275132621, 0.7431016677244544, 0.0743764339266566, 0.7986746965168494, 0.9738628511416196, 0.09885869591361907, 0.3005982340288592, 0.10445424987628227, 0.062264930525479656, 0.21248340962308465, 0.30218123214528425, 0.005351410069932561, 0.8069687388559417, 0.937314878402123, 0.4634562798869142, 0.496861090292517, 0.9635829525541374, 0.3630653292157304, 0.2534264819983666, 0.6481042572410755, 0.6734143854252718, 0.579140946305969, 0.5921924840068503, 0.8916929504715797, 0.9058948102981512, 0.6403969019246657, 0.31194356772347154, 0.46921561804963763, 0.8495757656600121, 0.42999373593848145, 0.6369702412758758, 0.603485649909046, 0.6178198124352141, 0.46944057697621955, 0.6986118672166317, 0.3755132188209306, 0.5959473904358602, 0.2853700090177722, 0.7605755751534466, 0.8112566261406103, 0.5847081757845353, 0.7151636967664645, 0.9342457613328043, 0.5666974771508635, 0.30326368926924707, 0.7283753959952309, 0.6659777970178394, 0.4005886575315508, 0.284869118100911, 0.10841250671252567, 0.24644005835929972, 0.1292069595908405, 0.8379935512549526, 0.23337076086489106, 0.4933850917355993, 0.4428010619042394, 0.8155086024778022, 0.8467431978836666, 0.8612548931259547, 0.7761927033461026, 0.7327214482944056, 0.2564174844632824, 0.5291889699978881, 0.5615395080193217, 0.3232985047021052, 0.5818997549523033, 0.7314263686030199, 0.08170755981864508, 0.4519432689445744, 0.5458883722881878, 0.009465948181729966, 0.044073820173988865, 0.15061036854287724, 0.11003974884170464, 0.5420825986861939, 0.1234326939685112, 0.1590581032287477, 0.544203357994981, 0.21630605315869544, 0.4618028447256409, 0.5592683388500741, 0.057761935365060024, 0.631670478859285, 0.8085348656277703, 0.14687410591702055, 0.38845046559057217, 0.4425219222860791, 0.6371598634328766, 0.6405973901893467, 0.8293763783984248, 0.7030547252033611, 0.45076848282484483, 0.24098192763466852, 0.6826763341861842, 0.2715566218051938, 0.4885156620865374, 0.15064461984557498, 0.19257610490848598, 0.7059285359453852, 0.11541112291928235, 0.6410154937679179, 0.06039636058831721, 0.710730416194533, 0.060082610037170414, 0.23368237292361038, 0.2407476031621496, 0.6893874431394815, 0.776330013605684, 0.005089322140264252, 0.06905406752794085, 0.861385033589361, 0.3032307928516741, 0.07715744355064746, 0.5197045286956777, 0.8754191409733604, 0.055741805910812015, 0.17044805473850277
  ];
  perm = [
    82, 236, 139, 91, 228, 115, 146, 35, 65, 234, 10, 16, 130, 202, 149, 80, 205, 7, 195, 14, 4, 86, 13, 247, 20, 127, 42, 98, 15, 224, 198, 87, 19, 183, 242, 109, 64, 184, 23, 204, 185, 113, 63, 153, 226, 85, 166, 178, 94, 215, 169, 79, 119, 239, 52, 9, 193, 238, 59, 45, 53, 154, 197, 6, 158, 175, 137, 68, 233, 43, 110, 17, 75, 186, 133, 201, 221, 57, 95, 207, 61, 156, 30, 237, 134, 84, 251, 66, 244, 253, 29, 18, 212, 101, 8, 70, 122, 114, 108, 50, 32, 103, 132, 216, 46, 0, 138, 89, 44, 74, 111, 73, 230, 241, 145, 245, 71, 22, 214, 106, 41, 176, 246, 143, 218, 180, 172, 252, 124, 148, 117, 174, 211, 187, 88, 112, 147, 162, 47, 55, 196, 151, 123, 102, 51, 128, 62, 194, 177, 248, 135, 165, 222, 67, 105, 31, 27, 243, 121, 26, 182, 34, 219, 192, 99, 203, 93, 199, 229, 249, 69, 155, 90, 28, 173, 213, 83, 120, 140, 163, 191, 157, 5, 49, 107, 38, 227, 92, 208, 190, 1, 54, 56, 48, 96, 131, 125, 220, 76, 164, 240, 72, 116, 2, 142, 11, 170, 104, 24, 12, 58, 225, 160, 150, 168, 152, 21, 126, 235, 39, 97, 3, 37, 78, 33, 118, 200, 254, 217, 209, 171, 210, 167, 40, 77, 25, 181, 36, 206, 100, 179, 60, 141, 129, 231, 161, 136, 159, 250, 232, 189, 81, 223, 188, 144, 255
  ];
}

noiseInit();

export function noise1D(x: number): number {
  let ix: number = Math.floor(x), ix1: number, fx: number = x - ix;

  fx = (3 - 2 * fx) * fx * fx;
  ix &= tabMask;
  ix1 = (ix + 1) & tabMask;

  return tabNoise[ix] * (1 - fx) +
    tabNoise[ix1] * fx;
}

export function noise2D(x: number, y: number): number {
  let ix: number = Math.floor(x), ix1: number, fx: number = x - ix;
  let iy: number = Math.floor(y), iy1: number, fy: number = y - iy;

  fx = (3 - 2 * fx) * fx * fx;
  ix &= tabMask;
  ix1 = (ix + 1) & tabMask;

  fy = (3 - 2 * fy) * fy * fy;
  iy &= tabMask;
  iy1 = (iy + 1) & tabMask;

  return tabNoise[index2(iy, ix)] * (1 - fx) * (1 - fy) +
    tabNoise[index2(iy, ix1)] * fx * (1 - fy) +
    tabNoise[index2(iy1, ix)] * (1 - fx) * fy +
    tabNoise[index2(iy1, ix1)] * fx * fy;
}

export function noise3D(x: number, y: number, z: number): number {
  let ix: number = Math.floor(x), ix1: number, fx: number = x - ix;
  let iy: number = Math.floor(y), iy1: number, fy: number = y - iy;
  let iz: number = Math.floor(z), iz1: number, fz: number = z - iz;

  fx = (3 - 2 * fx) * fx * fx;
  ix &= tabMask;
  ix1 = (ix + 1) & tabMask;

  fy = (3 - 2 * fy) * fy * fy;
  iy &= tabMask;
  iy1 = (iy + 1) & tabMask;

  fz = (3 - 2 * fz) * fz * fz;
  iz &= tabMask;
  iz1 = (iz + 1) & tabMask;

  return tabNoise[index3(ix, iy, iz)] * (1 - fx) * (1 - fy) * (1 - fz) +
    tabNoise[index3(ix1, iy, iz)] * fx * (1 - fy) * (1 - fz) +
    tabNoise[index3(ix, iy1, iz)] * (1 - fx) * fy * (1 - fz) +
    tabNoise[index3(ix1, iy1, iz)] * fx * fy * (1 - fz) +
    tabNoise[index3(ix, iy, iz1)] * (1 - fx) * (1 - fy) * fz +
    tabNoise[index3(ix, iy1, iz1)] * (1 - fx) * fy * fz +
    tabNoise[index3(ix1, iy, iz1)] * fx * (1 - fy) * fz +
    tabNoise[index3(iz1, iy1, ix1)] * fx * fy * fz;
}

export function noiseTurb1D(x: number, octaves: number): number {
  let frac: number = 1, val: number = 0;

  for (let i: number = 0; i < octaves; i++) {
    val += noise1D(x) / frac;
    x = (x + 0.30) * 2;
    frac *= 2;
  }

  return val * (2.0 - 1.0 / (1 << octaves));
}

export function noiseTurb1D2D(x: number, octaves: number): vec2 {
  return vec2Set(noiseTurb1D(x, octaves), noiseTurb1D(x + 4.7, octaves));
}

export function noiseTurb1D3D(x: number, octaves: number): vec3 {
  return vec3Set(noiseTurb1D(x, octaves), noiseTurb1D(x + 3.47, octaves), noiseTurb1D(x - 8.30, octaves));
}

export function noiseTurb2D(x: number, y: number, octaves: number): number {
  let frac: number = 1, val: number = 0;

  for (let i: number = 0; i < octaves; i++) {
    val += noise2D(x, y) / frac;
    x = (x + 0.30) * 2;
    y = (y + 0.47) * 2;
    frac *= 2;
  }

  return val * (2.0 - 1.0 / (1 << octaves));
}

export function noise2Turb2D(x: number, y: number, octaves: number): vec2 {
  return vec2Set(
    noiseTurb2D(x, y, octaves),
    noiseTurb2D(x + 0.102, y + 0.30, octaves)
  );
}

export function noise3Turb2D(x: number, y: number, octaves: number): vec3 {
  return vec3Set(
    noiseTurb2D(x, y, octaves),
    noiseTurb2D(x + 0.102, y + 0.30, octaves),
    noiseTurb2D(x + 0.47, y + 0.8, octaves)
  );
}

export function noiseTurb3D(x: number, y: number, z: number, octaves: number): number {
  let frac: number = 1, val: number = 0;

  for (let i: number = 0; i < octaves; i++) {
    val += noise3D(x, y, z) / frac;
    x = (x + 0.30) * 2;
    y = (y + 0.47) * 2;
    z = (z + 0.8) * 2;
    frac *= 2;
  }

  return val * (2.0 - 1.0 / (1 << octaves));
}

export function noise2Turb3D(x: number, y: number, z: number, octaves: number): vec2 {
  return vec2Set(
    noiseTurb3D(x, y, z, octaves),
    noiseTurb3D(x + 0.102, y + 0.30, z + 0.47, octaves)
  );
}

export function noise3Turb3D(x: number, y: number, z: number, octaves: number): vec3 {
  return vec3Set(
    noiseTurb3D(x, y, z, octaves),
    noiseTurb3D(x + 0.102, y + 0.30, z + 0.47, octaves),
    noiseTurb3D(x + 0.30, y + 0.47, y + 0.8, octaves)
  );
}

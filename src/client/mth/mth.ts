/***
 * MATH CONSTANTS & CONVERTATION
 ***/

/* Pi number constant */
export const PI: number = 3.1415926535897932384626433832795;

/* Convert degrees to radians function.
 * PARAMS:
 *   - angle in degrees:
 *       a: number;
 * RETURNS:
 *   (number) angle in radians.
 */
export function degreesToRadians(a: number): number {
  return a * (PI / 180.0);
} /* End of 'degreesToRadians' function */

/* Convert degrees to radians function redefinition */
export const d2R: Function = degreesToRadians;

/* Convert radians to degrees function.
 * PARAMS:
 *   - angle in radians:
 *       a: number;
 * RETURNS:
 *   (number) angle in degrees.
 */
export function radiansToDegrees(a: number): number {
  return a * (180.0 / PI);
} /* End of 'radiansToDegrees' function */

/* Convert radians to degrees function redefinition */
export const r2D: Function = radiansToDegrees;

/***
 * CLASSES DEFINITIONS
 ***/

/* 2-dimensional vector class. */
export class vec2 {
  x: number; // abscissa
  y: number; // ordinate

  /* 2-dimensional vector class constructor.
   * PARAMS:
   *   - vector coordinates: 
   *       x, y: number;
   * RETURNS:
   *   (vec2) vector object. 
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  } /* End of 'vec2' constructor */

  /* Get coordinates as list method.
  * RETURNS:
  *   (number[]) vector coordinates list.
  */
  toList(): number[] {
    return [this.x, this.y];
  } /* End of 'toList' function */

  /* Get coordinates as float32 array method.
  * RETURNS:
  *   (Float32Array) vector coordinates array.
  */
  toArray(): Float32Array {
    return new Float32Array(this.toList());
  } /* End of 'toArray' function */
}

/* 3-dimensional vector class. */
export class vec3 {
  x: number; // abscissa
  y: number; // ordinate
  z: number; // applicate

  /* 3-dimensional vector class constructor.
   * PARAMS:
   *   - vector coordinates: 
   *       x, y, z: number;
   * RETURNS:
   *   (vec3) vector object. 
   */
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  } /* End of 'vec3' constructor */

  /* Get coordinates as list method.
  * RETURNS:
  *   (number[]) vector coordinates list.
  */
  toList(): number[] {
    return [this.x, this.y, this.z];
  } /* End of 'toList' function */

  /* Get coordinates as float32 array method.
  * RETURNS:
  *   (Float32Array) vector coordinates array.
  */
  toArray(): Float32Array {
    return new Float32Array(this.toList());
  } /* End of 'toArray' function */
}

/* 4-dimensional vector class. */
export class vec4 {
  x: number; // abscissa
  y: number; // ordinate
  z: number; // applicate
  w: number; // alpha / depth

  /* 4-dimensional vector class constructor.
   * PARAMS:
   *   - vector coordinates: 
   *       x, y, z, w: number;
   * RETURNS:
   *   (vec4) vector object. 
   */
  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  } /* End of 'vec4' constructor */

  /* Get coordinates as list method.
  * RETURNS:
  *   (number[]) vector coordinates list.
  */
  toList(): number[] {
    return [this.x, this.y, this.z, this.w];
  } /* End of 'toList' function */

  /* Get coordinates as float32 array method.
  * RETURNS:
  *   (Float32Array) vector coordinates array.
  */
  toArray(): Float32Array {
    return new Float32Array(this.toList());
  } /* End of 'toArray' function */
}

/* 3x3 matrix class. */
export class mat3 {
  a: number[][]; // matrix elements

  /* 3x3 matrix class constructor.
   * PARAMS:
   *   - matrix elements: 
   *       a00, a01, a02,
   *       a10, a11, a12, 
   *       a20, a21, a22: number;
   * RETURNS:
   *   (mat3) matrix object. 
   */
  constructor(
    a00: number, a01: number, a02: number,
    a10: number, a11: number, a12: number,
    a20: number, a21: number, a22: number) {
    this.a = [
      [a00, a01, a02],
      [a10, a11, a12],
      [a20, a21, a22],
    ];
  } /* End of 'mat3' constructor */

  /* Get elements as list method.
  * RETURNS:
  *   (number[]) matrix elements list.
  */
  toList(): number[] {
    return [
      this.a[0][0], this.a[0][1], this.a[0][2],
      this.a[1][0], this.a[1][1], this.a[1][2],
      this.a[2][0], this.a[2][1], this.a[2][2],
    ];
  } /* End of 'toList' function */

  /* Get elements as float32 array method.
  * RETURNS:
  *   (Float32Array) matrix elements array.
  */
  toArray(): Float32Array {
    return new Float32Array(this.toList());
  } /* End of 'toArray' function */
}

/* 4x4 matrix class. */
export class mat4 {
  a: number[][]; // matrix elements

  /* 4x4 matrix class constructor.
   * PARAMS:
   *   - matrix elements: 
   *       a00, a01, a02, a03
   *       a10, a11, a12, a13
   *       a20, a21, a22, a23
   *       a30, a31, a32, a33: number;
   * RETURNS:
   *   (mat4) matrix object. 
   */
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
  } /* End of 'mat4' constructor */

  /* Get elements as list method.
  * RETURNS:
  *   (number[]) matrix elements list.
  */
  toList(): number[] {
    return [
      this.a[0][0], this.a[0][1], this.a[0][2], this.a[0][3],
      this.a[1][0], this.a[1][1], this.a[1][2], this.a[1][3],
      this.a[2][0], this.a[2][1], this.a[2][2], this.a[2][3],
      this.a[3][0], this.a[3][1], this.a[3][2], this.a[3][3]
    ];
  } /* End of 'toList' function */

  /* Get elements as float32 array method.
  * RETURNS:
  *   (Float32Array) matrix elements array.
  */
  toArray(): Float32Array {
    return new Float32Array(this.toList());
  } /* End of 'toArray' function */
}

/***
 * 2D VECTOR MATH
 ***/

export function vec2Set(x: number, y: number): vec2 {
  return new vec2(x, y);
}

export function vec2Set1(a: number): vec2 {
  return vec2Set(a, a);
}

export function vec2SetArray(arr: number[]): vec2 {
  return vec2Set(arr[0], arr[1]);
}

export function vec2AddVec2(v1: vec2, v2: vec2): vec2 {
  return vec2Set(v1.x + v2.x, v1.y + v2.y);
}

export function vec2SubVec2(v1: vec2, v2: vec2): vec2 {
  return vec2Set(v1.x - v2.x, v1.y - v2.y);
}

export function vec2MulNum(v: vec2, n: number): vec2 {
  return vec2Set(v.x * n, v.y * n);
}

export function vec2MulVec2(v1: vec2, v2: vec2): vec2 {
  return vec2Set(v1.x * v2.x, v1.y * v2.y);
}

export function vec2DivNum(v: vec2, n: number): vec2 {
  if (n == 0) {
    return vec2Set1(0);
  }
  return vec2Set(v.x / n, v.y / n);
}

export function vec2DivVec2(v1: vec2, v2: vec2): vec2 {
  if (v2.x == 0 || v2.y == 0) {
    return vec2Set1(0);
  }
  return vec2Set(v1.x / v2.x, v1.y / v2.y);
}

export function vec2Neg(v: vec2): vec2 {
  return vec2MulNum(v, -1);
}

export function vec2DotVec2(v1: vec2, v2: vec2): number {
  return v1.x * v2.x + v1.y * v2.y;
}

export function vec2Len(v: vec2): number {
  return Math.sqrt(vec2DotVec2(v, v));
}

export function vec2Normalize(v: vec2): vec2 {
  const len = vec2Len(v);
  if (len == 0 || len == 1) {
    return v;
  } else {
    return vec2DivNum(v, len);
  }
}

/***
 * 3D VECTOR MATH
 ***/

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

export function vec3Transform(v: vec3, m: mat4): vec3 {
  return vec3Set(
    v.x * m.a[0][0] + v.y * m.a[1][0] + v.z * m.a[2][0],
    v.x * m.a[0][1] + v.y * m.a[1][1] + v.z * m.a[2][1],
    v.x * m.a[0][2] + v.y * m.a[1][2] + v.z * m.a[2][2]
  );
}

/***
 * 4D VECTOR MATH
 ***/

export function vec4Set(x: number, y: number, z: number, w: number): vec4 {
  return new vec4(x, y, z, w);
}

export function vec4Set1(a: number): vec4 {
  return vec4Set(a, a, a, a);
}

export function vec4SetArray(arr: number[]): vec4 {
  return vec4Set(arr[0], arr[1], arr[2], arr[3]);
}

export function vec4AddVec4(v1: vec4, v2: vec4): vec4 {
  return vec4Set(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z, v1.w + v2.w);
}

export function vec4SubVec4(v1: vec4, v2: vec4): vec4 {
  return vec4Set(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z, v1.w - v2.w);
}

export function vec4MulNum(v: vec4, n: number): vec4 {
  return vec4Set(v.x * n, v.y * n, v.z * n, v.w * n);
}

export function vec4MulVec4(v1: vec4, v2: vec4): vec4 {
  return vec4Set(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z, v1.w * v2.w);
}

export function vec4DivNum(v: vec4, n: number): vec4 {
  if (n == 0) {
    return vec4Set1(0);
  }
  return vec4Set(v.x / n, v.y / n, v.z / n, v.w / n);
}

export function vec4DivVec4(v1: vec4, v2: vec4): vec4 {
  if (v2.x == 0 || v2.y == 0 || v2.z == 0 || v2.w == 0) {
    return vec4Set1(0);
  }
  return vec4Set(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z, v1.w / v2.w);
}

export function vec4Neg(v: vec4): vec4 {
  return vec4MulNum(v, -1);
}

export function vec4DotVec4(v1: vec4, v2: vec4): number {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
}


export function vec4Len(v: vec4): number {
  return Math.sqrt(vec4DotVec4(v, v));
}

export function vec4Normalize(v: vec4): vec4 {
  const len = vec4Len(v);
  if (len == 0 || len == 1) {
    return v;
  } else {
    return vec4DivNum(v, len);
  }
}

export function vec4NormalizeDepth(v: vec4): vec4 {
  if (v.w == 0) {
    return vec4Set1(0);
  } else {
    return vec4DivNum(v, v.w);
  }
}

export function vec4MulMat4(v: vec4, m: mat4): vec4 {
  const w = v.x * m.a[0][3] + v.y * m.a[1][3] + v.z * m.a[2][3] + v.w * m.a[3][3];

  return vec4DivNum(vec4Set(
    v.x * m.a[0][0] + v.y * m.a[1][0] + v.z * m.a[2][0] + m.a[3][0],
    v.x * m.a[0][1] + v.y * m.a[1][1] + v.z * m.a[2][1] + m.a[3][1],
    v.x * m.a[0][2] + v.y * m.a[1][2] + v.z * m.a[2][2] + m.a[3][2],
    v.x * m.a[0][3] + v.y * m.a[1][3] + v.z * m.a[2][3] + m.a[3][3]
  ), w);
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

const tabNoise: number[] = [];
const perm: number[] = [];

function index1(x: number): number { return perm[x & tabMask]; }
function index2(x: number, y: number): number { return perm[(x + index1(y)) & tabMask]; }
function index3(x: number, y: number, z: number): number { return perm[(x + index2(y, z)) & tabMask]; }
function index4(x: number, y: number, z: number, w: number): number { return perm[(x + index3(y, z, w)) & tabMask]; }

function noiseInit() {
  for (let i: number = 0; i < tabSize; i++) {
    tabNoise[i] = Math.random();
  }
  for (let i: number = 0; i < tabSize; i++) {
    perm[i] = i;
  }
  for (let i: number = 0; i < tabSize * tabSize; i++) {
    let
      a: number = (Math.random() * tabMask) >> 0,
      b: number = (Math.random() * tabMask) >> 0,
      tmp: number = perm[a];
    perm[a] = perm[b];
    perm[b] = tmp;
  }
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

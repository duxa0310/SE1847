import * as mth from "./mth.ts"

/*** SBB ***/

export class SBB {
  center: mth.vec3;
  radius: number;

  constructor(center: mth.vec3, radius: number) {
    this.center = center, this.radius = radius;
  }
}

export function sbbCollision(sphere1: SBB, sphere2: SBB) {
  const centerDist: number = mth.vec3Len(mth.vec3SubVec3(sphere1.center, sphere2.center));
  return Math.abs(sphere1.radius - sphere2.radius) < centerDist && centerDist < sphere1.radius + sphere2.radius;
}

/*** AABB ***/

/*****************************
 
                 4--------7
                /'       /|
     Y         / '      / |
     |        0--------3  |
     |        |  '     |  |
     |    Z   |  5 - - |- 6
     |   /    | '      | /
     |  /     |'       |/
     | /      1--------2
     |/
     +-------------- X

*****************************/

export class AABB {
  minBB: mth.vec3;
  maxBB: mth.vec3;

  constructor(minBB: mth.vec3, maxBB: mth.vec3) {
    this.minBB = minBB;
    this.maxBB = maxBB;
  }
}

export function evalAABB(points: mth.vec3[]): AABB {
  if (points == undefined || points.length == 0) {
    return new AABB(mth.vec3Set1(0), mth.vec3Set1(1));
  }

  let
    minBB: mth.vec3 = structuredClone(points[0]),
    maxBB: mth.vec3 = structuredClone(points[0]);

  for (let i = 1; i < points.length; i++) {
    if (minBB.x > points[i].x)
      minBB.x = points[i].x;
    else if (maxBB.x < points[i].x)
      maxBB.x = points[i].x;
    if (minBB.y > points[i].y)
      minBB.y = points[i].y;
    else if (maxBB.y < points[i].y)
      maxBB.y = points[i].y;
    if (minBB.z > points[i].z)
      minBB.z = points[i].z;
    else if (maxBB.z < points[i].z)
      maxBB.z = points[i].z;
  }

  return new AABB(minBB, maxBB);
}

export function aabbCollision(box1: AABB, box2: AABB): boolean {
  return box1.minBB.x <= box2.maxBB.x &&
    box1.maxBB.x >= box2.minBB.x &&
    box1.minBB.y <= box2.maxBB.y &&
    box1.maxBB.y >= box2.minBB.y &&
    box1.minBB.z <= box2.maxBB.z &&
    box1.maxBB.z >= box2.minBB.z;
}

/*** OBB ***/

export class OBB {
  vertexBounds: mth.vec3[];

  constructor(vertices: mth.vec3[]) {
    if (vertices.length !== 8) throw new Error("OBB must have exactly 8 vertices.");
    this.vertexBounds = vertices;
  }
}

export function obbCreateFromAABB(box: AABB): OBB {
  const
    minBB: mth.vec3 = box.minBB,
    maxBB: mth.vec3 = box.maxBB;

  return new OBB([
    minBB,
    mth.vec3Set(minBB.x, minBB.y, maxBB.z),
    mth.vec3Set(maxBB.x, minBB.y, maxBB.z),
    mth.vec3Set(maxBB.x, minBB.y, minBB.z),
    mth.vec3Set(minBB.x, maxBB.y, minBB.z),
    mth.vec3Set(minBB.x, maxBB.y, maxBB.z),
    maxBB,
    mth.vec3Set(maxBB.x, maxBB.y, minBB.z)
  ]);
}

function obbGetFaceAxis(box: OBB): mth.vec3[] {
  const axis: mth.vec3[] = [];
  const [v0, v1, v2, v3, v4, v5, v6, v7] = box.vertexBounds;

  const right: mth.vec3 = mth.vec3Normalize(mth.vec3SubVec3(v1, v0));
  const up: mth.vec3 = mth.vec3Normalize(mth.vec3SubVec3(v3, v0));
  const forward: mth.vec3 = mth.vec3Normalize(mth.vec3SubVec3(v4, v0));

  axis.push(right, up, forward);
  return axis;
}

export function obbCollision(box1: OBB, box2: OBB): boolean {
  const allAxis: mth.vec3[] = [];
  const box1Axis: mth.vec3[] = obbGetFaceAxis(box1);
  const box2Axis: mth.vec3[] = obbGetFaceAxis(box2);

  /* Collect all axis for check */
  allAxis.push(...box1Axis, ...box2Axis);
  for (let a1 of box1Axis) {
    for (let a2 of box2Axis) {
      const crossAxis: mth.vec3 = mth.vec3CrossVec3(a1, a2);
      if (mth.vec3Len(crossAxis) > 0.000001) {
        allAxis.push(mth.vec3Normalize(crossAxis));
      }
    }
  }

  /* Check each axis for overlap */
  for (let axis of allAxis) {

    /* Projection of box1 vertices on current axis */
    let min1: number = Infinity, max1: number = -Infinity;
    for (const v of box1.vertexBounds) {
      const proj: number = mth.vec3DotVec3(v, axis);
      min1 = Math.min(min1, proj);
      max1 = Math.max(max1, proj);
    }

    /* Projection of box2 vertices on current axis */
    let min2: number = Infinity, max2: number = -Infinity;
    for (const v of box2.vertexBounds) {
      const proj: number = mth.vec3DotVec3(v, axis);
      min2 = Math.min(min2, proj);
      max2 = Math.max(max2, proj);
    }

    /* Exit if projections do not intersect (no collision) */
    if (max1 < min2 || max2 < min1) {
      return false;
    }
  }

  /* Collision on all axis */
  return true;
}
import * as mth from "../../../mth/mth.ts";
import * as prim from "../prim";
import * as mtl from "./mtl.ts";
import { shdGetByName } from "./shd.ts";

let spherePrim: prim.Primitive, cylinderPrim: prim.Primitive;

const sphereSrc: string = "v 0.000000 -1.000000 0.000000\nv 0.723600 -0.447215 0.525720\nv -0.276385 -0.447215 0.850640\nv -0.894425 -0.447215 0.000000\nv -0.276385 -0.447215 -0.850640\nv 0.723600 -0.447215 -0.525720\nv 0.276385 0.447215 0.850640\nv -0.723600 0.447215 0.525720\nv -0.723600 0.447215 -0.525720\nv 0.276385 0.447215 -0.850640\nv 0.894425 0.447215 0.000000\nv 0.000000 1.000000 0.000000\nf 1/1/1 2/2/1 3/3/1\nf 2/2/2 1/4/2 6/5/2\nf 1/6/3 3/7/3 4/8/3\nf 1/9/4 4/8/4 5/10/4\nf 1/11/5 5/10/5 6/5/5\nf 2/2/6 6/5/6 11/12/6\nf 3/3/7 2/2/7 7/13/7\nf 4/8/8 3/7/8 8/14/8\nf 5/10/9 4/8/9 9/15/9\nf 6/5/10 5/10/10 10/16/10\nf 2/2/11 11/12/11 7/13/11\nf 3/3/12 7/13/12 8/17/12\nf 4/8/13 8/14/13 9/15/13\nf 5/10/14 9/15/14 10/16/14\nf 6/5/15 10/16/15 11/12/15\nf 7/13/16 11/12/16 12/18/16\nf 8/17/17 7/13/17 12/19/17\nf 9/15/18 8/14/18 12/20/18\nf 10/16/19 9/15/19 12/21/19\nf 11/12/20 10/16/20 12/22/20";
const cylinderSrc: string = "v 0.000000 -4.000000 -1.000000\nv 0.000000 4.000000 -1.000000\nv 0.866025 -4.000000 -0.500000\nv 0.866025 4.000000 -0.500000\nv 0.866025 -4.000000 0.500000\nv 0.866025 4.000000 0.500000\nv -0.000000 -4.000000 1.000000\nv -0.000000 4.000000 1.000000\nv -0.866025 -4.000000 0.500000\nv -0.866025 4.000000 0.500000\nv -0.866025 -4.000000 -0.500000\nv -0.866025 4.000000 -0.500000\nf 1/1/1 2/2/1 4/3/1 3/4/1\nf 3/4/2 4/3/2 6/5/2 5/6/2\nf 5/6/3 6/5/3 8/7/3 7/8/3\nf 7/8/4 8/7/4 10/9/4 9/10/4\nf 4/11/5 2/12/5 12/13/5 10/14/5 8/15/5 6/16/5\nf 9/10/6 10/9/6 12/17/6 11/18/6\nf 11/18/7 12/17/7 2/19/7 1/20/7\nf 1/21/8 3/22/8 5/23/8 7/24/8 9/25/8 11/26/8";

export function mrkDrawSphere(p0: mth.vec3, r: mth.vec3, c: mth.vec4, trans: mth.mat4) {
  const mat: mtl.Material = mtl.mtlCreate("Sphere marker material", mth.vec3Set(c.x, c.y, c.z), mth.vec3Set1(0.5), mth.vec3Set1(0.3), 30, c.w,
    shdGetByName("plain"));
  spherePrim.mtl = mat;
  spherePrim.draw(mth.mat4MulMat4(
    trans,
    mth.mat4MulMat4(
      mth.mat4Scale(r),
      mth.mat4Translate(p0),
    )
  ));
}

export function mrkDrawCylinder(p0: mth.vec3, p1: mth.vec3, r: number, c: mth.vec4, trans: mth.mat4) {
  const mat: mtl.Material = mtl.mtlCreate("Cylinder marker material", mth.vec3Set(c.x, c.y, c.z), mth.vec3Set1(0.5), mth.vec3Set1(0.3), 30, c.w,
    shdGetByName("plain"));
  cylinderPrim.mtl = mat;
  const dP: mth.vec3 = mth.vec3SubVec3(p1, p0);
  cylinderPrim.draw(
    mth.mat4MulMat4MulMat4(
      mth.mat4Scale(mth.vec3Set(r / 2, mth.vec3Len(dP) / 16, r / 2)),
      mth.mat4Rotate(mth.radiansToDegrees(Math.acos(mth.vec3DotVec3(mth.vec3Set(0, 1, 0), mth.vec3Normalize(dP)))),
        mth.vec3Normalize(mth.vec3CrossVec3(mth.vec3Set(0, 1, 0), dP))),
      mth.mat4Translate(mth.vec3DivNum(mth.vec3AddVec3(p0, p1), 2)),
    ),
  );
}

export function mrkInit() {
  spherePrim = prim.primCreateFromOBJString(sphereSrc, mtl.mtlGetDefault());
  cylinderPrim = prim.primCreateFromOBJString(cylinderSrc, mtl.mtlGetDefault());
}
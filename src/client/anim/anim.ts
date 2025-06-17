import * as mth from "../mth/mth.ts"
import * as prim from "./rnd/prim.ts";
import * as rnd from "./rnd/rnd.ts"
import * as time from "./timer.ts"
import * as input from "./input.ts"
import * as shd from "./rnd/res/shd.ts";
import * as mtl from "./rnd/res/mtl.ts";
import * as units from "../units/units.ts"
import { UnitSkybox } from "../units/u_skybox.ts";
import { UnitAxis } from "../units/u_axis.ts";
import { UnitSquare } from "../units/u_square.ts";
import { UnitGrid } from "../units/u_grid.ts";

declare global {
  interface Window {
    canvas: HTMLCanvasElement;
    gl: WebGL2RenderingContext;
  }
}

let playersMap: Map<String, { online: boolean, loc: mth.vec3 }>;

export function setPlayersMap(map: Map<String, { online: boolean, loc: mth.vec3 }>) {
  playersMap = map;
}

export async function animInit() {
  rnd.rndInit();
  time.timerInit();
  input.inputInit();
  await shd.shdInit();
  mtl.mtlInit();
  units.unitAdd(new UnitSkybox());
  units.unitAdd(new UnitAxis());
  units.unitAdd(new UnitSquare());
  units.unitAdd(new UnitGrid());
  await units.unitsInit();
}

export function animRender() {
  time.timerResponse();
  rnd.rndStart();
  units.unitsResponse();
  units.unitsRender();

  if (playersMap != undefined) {
    for (let name of playersMap.keys()) {
      const playerContext = playersMap.get(name) || { online: false, loc: mth.vec3Set1(0) };
      console.log(name, playerContext);

      if (playerContext.online && playerContext.loc != undefined) {
        prim.primCreate(window.gl.TRIANGLES, mtl.mtlGetDefault(), [
          new prim.Vertex(mth.vec3Set(0, 0, 0), mth.vec2Set(0, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.96, 0.95, 0.41, 1)),
          new prim.Vertex(mth.vec3Set(100, 0, 0), mth.vec2Set(1, 0), mth.vec3Set(0, 0, 0), mth.vec4Set(0.36, 0.70, 0.44, 1)),
          new prim.Vertex(mth.vec3Set(0, 100, 0), mth.vec2Set(0, 1), mth.vec3Set(0, 0, 0), mth.vec4Set(0.78, 0.98, 0.84, 1)),
        ], []).draw(mth.mat4Translate(mth.vec3AddVec3(playerContext.loc, mth.vec3Set(0, -1, 0))));
      }
    }
  }
}
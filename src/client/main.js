import * as mth from "./mth/mth.ts";
import * as anim from "./anim/anim.ts";
import { getRenderContext } from "./anim/rnd/rnd.ts";

let socket;
let username;

async function main() {
  username = localStorage.getItem('username');
  if (!username) {
    window.location.href = '/';
  }

  window.addEventListener("load", function () {
    socket = io();

    socket.on("connect", () => {
      console.log("Connected with ID:", socket.id);
      socket.emit('setUsername', username);
    });

    socket.on("getServerData", (serverStr) => {
      const serverData = JSON.parse(serverStr);
      const map = new Map();
      for (let property in serverData) {
        //if (property != username)
        map.set(property, serverData[property]);
      }
      anim.setPlayersMap(map);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });

  });
  console.log(mth.degreesToRadians(180));
  window.canvas = document.getElementById("webgl-canvas");
  window.gl = canvas.getContext("webgl2");

  await anim.animInit();
  systemResponse();
}

function systemResponse() {
  anim.animRender();
  socket.emit("updatePlayerData", JSON.stringify({
    name: username,
    data: {
      online: true,
      loc: anim.getAnimContext().playerPos,
      dir: anim.getAnimContext().playerDir
    }
  }));
  window.requestAnimationFrame(systemResponse);
}

main();
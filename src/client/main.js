import * as mth from "./mth/mth.ts";
import * as anim from "./anim/anim.ts";

export async function loadTextFromFile(filePath) {
  const sourceText = fetch(filePath)
    .then((response) => response.text())
    .then((text) => text)
    .catch((err) => console.err(err));
  return sourceText;
}

let socket;

async function main() {
  const username = localStorage.getItem('username');
  if (!username) {
    window.location.href = '/';
  }

  window.addEventListener("load", function () {
    socket = io();

    socket.on("connect", () => {
      console.log("Connected with ID:", socket.id);
      socket.emit('setUsername', username);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });
  });
  
  console.log(mth.degreesToRadians(180));
  window.canvas = document.getElementById("webgl-canvas");
  window.gl = canvas.getContext("webgl2");

  await anim.animInit();
  anim.animRender();
}

main();
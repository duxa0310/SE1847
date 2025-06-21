import * as mth from "./mth/mth.ts";
import * as anim from "./anim/anim.ts";
import * as time from "./anim/timer.ts";
import * as input from "./anim/input.ts";
import { Pane } from "tweakpane";
import { getRenderContext } from "./anim/rnd/rnd.ts";

export let socket;
export let username;
let message = "";
let prev_message = "";

function leave() {
  window.location.href = '/';
}

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
      socket.emit("getMessages");
    });

    socket.on("printMessages", function (messages) {
      for (let i = 0; i < messages.length; i++) {
        prev_message += messages[i].username + ": " + messages[i].message;
        if (i < messages.length - 1 && messages[i].username != username)
          prev_message += "\n";
      }
      printPrevMessages(prev_message);
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

    socket.on("getMessage", (messages) => {
      if (messages.length - 1 < 0) {
        prev_message = "";
      }
      else {
        prev_message = messages[messages.length - 1].username + ": " + messages[messages.length - 1].message + "\n";
      }
      printPrevMessages(prev_message);
      console.log(`Got message from another client`)
    });

    socket.on("getHit", (obj) => {
      console.log(`You got hit by ${obj.shooter}! GG!`);
      leave();
    })

    socket.on("disconnect", () => {
      console.log("Disconnected:", socket.id);
    });

  });
  console.log(mth.degreesToRadians(180));
  window.canvas = document.getElementById("webgl-canvas");
  window.gl = canvas.getContext("webgl2");

  await anim.animInit();
  systemHTMLInit();
  systemResponse();
}

let pane, tab;
const tweakContext = {
  fps: 1847.30,
  chat: "",
  input: "",
};

function systemHTMLInit() {
  let tc = time.getTimeContext();

  pane = new Pane({
    title: 'INFO & CHAT',
    expanded: true,
  });

  tweakContext.fps = tc.fps;

  tab = pane.addTab({
    pages: [
      { title: 'Info' },
      { title: 'Chat' },
    ],
  });

  tab.pages[0].addBinding(tweakContext, 'fps', {
    readonly: true,
    multiline: true,
    rows: 5,
  });

  tab.pages[1].addBinding(tweakContext, 'chat', {
    readonly: true,
    multiline: true,
    rows: 5,
  });

  tab.pages[1].addBinding(tweakContext, 'input', {
    readonly: false,
    interval: 10,
  });

  const btn = tab.pages[1].addButton({
    title: 'Send a message',
  });

  btn.on('click', () => {
    message = tweakContext.input;
    tweakContext.chat += username + ': ' + message + '\n';
    tweakContext.input = "";
    socket.emit("sendMessage", username, message);
  });
}

function printPrevMessages(prev_msg) {
  if (prev_msg != "") {
    tweakContext.chat += prev_msg;
  }
}

function systemResponse() {
  anim.animRender();
  socket.emit("updatePlayerData", JSON.stringify({
    name: username,
    data: {
      online: true,
      loc: anim.getAnimContext().playerPos,
      dir: anim.getAnimContext().playerDir,
    }
  }));
  window.requestAnimationFrame(systemResponse);
}

main();
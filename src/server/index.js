const http = require("http");
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");
const path = require("path");
const mongodb = require("mongodb");

const app = express();
const port = 8080;
const dbUrl = "mongodb://localhost:27017";

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(
  "/socket.io",
  express.static(__dirname + "/../../node_modules/socket.io/client-dist"),
);

const server = http.createServer(app);
const io = new Server(server);

/* Database handle */

const clients = []; // Sockets list

/* App handle */

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../../dist/auth.html"));
});

app.get("/game", (req, res) => {
  res.sendFile(path.join(__dirname, "/../../dist/game.html"));
});

app.use(express.static("dist"));

const playersMap = {};

app.post("/auth", async (req, res) => {
  const username = req.body.username;

  if (!username) {
    res.json({
      success: false,
      error: "Username required",
    });
  } else if (username.length < 3) {
    res.json({
      success: false,
      error: "Username must be at least 3 characters",
    });
  } else if (playersMap[username] && playersMap[username].online == true) {
    res.json({
      success: false,
      error: "You are already in the game!",
    });
  } else {
    res.json({ success: true });
  }
});

io.on("connection", (socket) => {
  clients.push(socket);
  console.log(`Client connected to site with socket id: ${socket.id}`);

  socket.on("setUsername", (username) => {
    socket.username = username;
    playersMap[socket.username] = {};
    playersMap[socket.username].online = true;
    console.log(`Player ${username} connected to game`);
  });

  socket.on("updatePlayerData", (playerStr) => {
    const playerObj = JSON.parse(playerStr);
    playersMap[playerObj.name] = playerObj.data;
    for (let client of clients) {
      client.emit("getServerData", JSON.stringify(playersMap));
    }
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected with id: ${socket.id}`);
    playersMap[socket.username].online = false;
    const index = clients.indexOf(socket);
    if (index > -1) {
      clients.splice(index, 1);
    }
  });
});

server.listen(port, () => {
  console.log(`Server started: ${JSON.stringify(server.address())}`);
});
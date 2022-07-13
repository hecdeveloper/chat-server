const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Websocket Server");
});

server.listen(3001, () => {
  console.log("listening on port 3001");
});

io.on("connection", (socket) => {
  console.log("a user joined!!");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat", (message) => {
    io.emit("chat", message)
    console.log(message);
  });
});

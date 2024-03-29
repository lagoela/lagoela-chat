import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server);

const __dirname = join(dirname(fileURLToPath(import.meta.url)), "../");
console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "/public/index.html"));
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("chat message", (msg) => {
    io.emit('chat message', msg)
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, (serverInfo) => {
  console.log("Listening on port 3000!");
});

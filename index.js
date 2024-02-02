import express from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!<h1>");
});

server.listen(3000, (serverInfo) => {
    console.log('Listening on port 3000!');
})
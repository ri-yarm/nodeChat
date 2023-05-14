import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(router);

const server = http.createServer(app);

const socketIo = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(3000, () => {
  console.log("server already");
});

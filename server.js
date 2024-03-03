import express from "express";
import { Server } from "socket.io";
import * as http from "http";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://almeerahsaleem:ks1pBvvtnjfQLwkm@whatsware.rlq9gwq.mongodb.net/?retryWrites=true&w=majority"
);
import User from "./src/models/userModel.js";

const app = express();
const PORT = 8000;

const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

// server-side
io.on("connection", (socket) => {
  console.log("New client connected " + socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  // Listen for messages from clients
  socket.on("message", (data) => {
    console.log(`Received message from ${socket.id}: ${data}`);
    // io.to(socket.id).emit(
    socket.emit("reply", `Reply from server to ${socket.id}: ${data}`);
  });
});

// Now that our HTTP server is fully set up, actually listen.
httpServer.listen(PORT, () => {
  console.log(`🚀 Query endpoint ready at http://localhost:${PORT}`);
  console.log(`🚀 WebSocket endpoint ready at ws://localhost:${PORT}`);
});

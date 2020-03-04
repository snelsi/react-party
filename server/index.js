const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const cors = require("cors");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on("connect", socket => {
  socket.on("party", actionNumber => {
    socket.broadcast.emit("party", actionNumber);
  });
});

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server is working at ${process.env.PORT || 5000} port. 🚀`)
);

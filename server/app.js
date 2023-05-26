import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import router from "./routes/index.js";
import { addUsers } from "./data/users.js";

const app = express();

app.use(cors({ origin: "*" }));
app.use(router);

const server = http.createServer(app);

// корс с базовой политикой
const socketIo = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

socketIo.on('connection', (socket) => {
  socket.on('join', ( {name, room}) => {
    socket.join(room)

    const {user} = addUsers({name, room})

    // При подключения юзера к комнате
    socket.emit('message', {
      data: {
        user: {
          name: 'Admin'
        },
        message: `Привет от админа ${user.name}`
      }
    })

    //Когда кто-то коннектится к комнате вызывается
    socket.broadcast.to(user.room).emit('message', {
      data: {
        user: {
          name: 'Admin'
        },
        message: `Пользователь ${user.name} подключился к комнате`
      }
    })
  })

  socketIo.on('diconnect', () => {
    console.log('diconnect');
  })
})

server.listen(3000, () => {
  console.log("server already");
});

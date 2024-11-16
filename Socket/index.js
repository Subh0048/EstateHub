
import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
  },
});

let onlineuser = [];

const adduser = (userId, socketId) => {
  const userExist = onlineuser.find((user) => user.userId === userId);
  if (!userExist) {
    onlineuser.push({ userId, socketId });
  }
};

const removeuser = (socketId) => {
  onlineuser = onlineuser.filter((user) => user.socketId !== socketId);
};

const getuser = (userId)=>{
    return onlineuser.find((user)=>user.userId === userId)
}

io.on("connection", (socket) => {
  socket.on("newuser", (userId) => {
    adduser(userId, socket.id);
    console.log(onlineuser);
    
  });

  socket.on("sendmessage", ({ receiverId, data }) => {
  
    const receiver = getuser(receiverId);
    io.to(receiver.socketId).emit("getmessage",data)
  });

  socket.on("disconnect", () => {
    removeuser(socket.id);
  });

});

io.listen("4000");

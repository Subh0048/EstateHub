import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postroute from "./routes/post.route.js";
import authrouter from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userrouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";



const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/posts", postroute);
app.use("/api/auth", authrouter);
app.use("/api/test", testRoute);
app.use("/api/users", userrouter);  
app.use("/api/chats", chatRouter);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("server is running ! ");
});

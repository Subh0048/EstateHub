import express from "express";
import cookieParser from "cookie-parser";
import postroute from "./routes/post.route.js";
import authrouter from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userrouter from "./routes/user.route.js";
import cors from "cors";


const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use("/api/posts", postroute);
app.use("/api/auth", authrouter);
app.use("/api/test", testRoute);
app.use("/api/users", userrouter);

app.listen(8800, () => {
  console.log("server is running ! ");
});

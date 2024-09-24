import express from "express"
import cookieParser from "cookie-parser";
import postroute from "./routes/post.route.js";
import authrouter from "./routes/auth.route.js";

const app = express();

app.use(express.json())

app.use("/api/post",postroute)
app.use("/api/auth",authrouter)



app.listen(8800,()=>{
    console.log("server is running ! ");
    
})
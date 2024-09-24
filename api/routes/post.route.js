import express from "express"

const postroute = express.Router()

postroute.get("/post1", (req,res)=>{
       res.send("post1")
    
});

export default postroute
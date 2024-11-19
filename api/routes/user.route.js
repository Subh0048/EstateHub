import express from "express"
import { getUsers,updateUser,deleteUser,profilePosts,notification,savePost,sendmail} from "../controllers/user.controller.js";
import{ verifyToken} from "../middleware/verifyToken.js"

const userrouter = express.Router()


userrouter.get("/",verifyToken,getUsers);
// userrouter.get("/:id",verifyToken,getUser);
userrouter.put("/:id",verifyToken,updateUser);
userrouter.delete("/:id",verifyToken,deleteUser);
userrouter.post("/save",verifyToken,savePost);
userrouter.get("/profilePosts",verifyToken,profilePosts);
userrouter.get("/notification",verifyToken,notification);
userrouter.post("/send-email",sendmail);

export default userrouter
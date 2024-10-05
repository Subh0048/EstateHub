import express from "express"
import { getUser,getUsers,updateUser,deleteUser } from "../controllers/user.controller.js";
import{ verifyToken} from "../middleware/verifyToken.js"

const userrouter = express.Router()


userrouter.get("/",verifyToken,getUsers);
userrouter.get("/:id",verifyToken,getUser);
userrouter.put("/:id",verifyToken,updateUser);
userrouter.delete("/:id",verifyToken,deleteUser);

export default userrouter
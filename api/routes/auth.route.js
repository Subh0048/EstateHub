import express from "express"
import { login ,logout,register,resetpassword,forgotpassword} from "../controllers/auth.controller.js";


const authrouter = express.Router()

authrouter.post("/register",register);
authrouter.post("/login",login);
authrouter.post("/logout",logout);
authrouter.post("/forgotpassword",forgotpassword); 
authrouter.post("/reset-password/:token",resetpassword); 


export default authrouter
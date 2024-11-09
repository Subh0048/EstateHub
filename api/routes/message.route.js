import express from "express";
import {
    addMessage
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const messageRoute = express.Router();

messageRoute.post("/:chatId", verifyToken,addMessage);


export default messageRoute;
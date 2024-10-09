import express from "express";
import {
    addMessage
} from "../controllers/message.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const messageRoute = express.Router();

messageRoute.post("/:id", verifyToken,addMessage);


export default messageRoute;
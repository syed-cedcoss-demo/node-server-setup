import express from "express";
import { signup } from "../controllers/userController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.post("/signup", signup);

export default router;

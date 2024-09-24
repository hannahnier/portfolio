import express from "express";
import { sendForm } from "./controller.js";
import { keepAlive } from "./controller.js";

export const router = express.Router();

router.route("/").get(keepAlive);
router.route("/").post(sendForm);

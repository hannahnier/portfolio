import express from "express";
import { sendForm } from "./controller.js";
import { ping } from "./controller.js";

export const router = express.Router();

router.route("/ping").get(ping);
router.route("/sendemail").post(sendForm);

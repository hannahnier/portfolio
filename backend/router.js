import express from "express";
import { sendForm } from "./controller.js";
import { getUser } from "./controller.js";

export const router = express.Router();

router.route("/getUser").get(getUser);
router.route("/sendemail").post(sendForm);

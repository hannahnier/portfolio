import express from "express";
import { sendForm } from "./controller.js";

export const router = express.Router();

router.route("/").post(sendForm);

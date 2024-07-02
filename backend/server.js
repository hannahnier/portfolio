import express from "express";
import dotenv from "dotenv";
import { router } from "./router.js";
import { errorMiddleware } from "./errorMiddleware.js";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/sendemail", router);
app.use(errorMiddleware);

const startServer = () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

startServer();

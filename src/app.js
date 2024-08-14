import express from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors())
router(app);

export default app;

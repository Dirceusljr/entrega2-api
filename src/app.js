import express from "express";
import router from "./routes/index.js";
import erro from "./utils/errors/erro.js";

const app = express();

router(app);

app.use(erro)

export default app;

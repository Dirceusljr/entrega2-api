import express from "express";
import usuarios from "./usuarios.js";

const router = (app) => {
    app.use(express.json(),
    usuarios);
}

export default router;
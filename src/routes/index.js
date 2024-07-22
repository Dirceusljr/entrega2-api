import express from "express";
import usuarios from "./usuarios.js";
import livros from "./livros.js";

const router = (app) => {
    app.use(express.json(),
    usuarios,
    livros);
}

export default router;
import express from "express";
import usuarios from "./usuarios.js";
import livros from "./livros.js";
import livrosDesejados from "./livrosDesejados.js"

const router = (app) => {
    app.use(express.json(),
    usuarios,
    livros,
    livrosDesejados);
}


export default router;
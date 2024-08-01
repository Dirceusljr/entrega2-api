import express from "express";
import usuarios from "./usuariosRoute.js";
import livros from "./livrosRoute.js";
import livrosDesejados from "./livrosDesejadosRoute.js";
import avaliacaoLivros from "./avaliacaoLivrosRoute.js";
import cargos from "./cargosRoute.js";
import reputacaoUsuarios from "./reputacaoUsuariosRoute.js";
import trocaPedidos from "./trocaPedidosRoute.js";
import usuarioCargos from "./usuarioCargosRoute.js";
import auth from "./authRoute.js"

const router = (app) => {
    app.use(
    express.json(),
    auth,
    usuarios,
    livros,
    trocaPedidos,
    livrosDesejados,
    avaliacaoLivros,
    cargos,
    usuarioCargos,
    reputacaoUsuarios
    );
}


export default router;
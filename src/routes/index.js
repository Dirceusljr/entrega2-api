import express from "express";
import usuarios from "./usuarios.js";
import livros from "./livros.js";
import livrosDesejados from "./livrosDesejados.js";
import avaliacaoLivros from "./avaliacaoLivros.js";
import cargos from "./cargos.js";
import permissoes from "./permissoes.js";
import cargosPermissoes from "./cargosPermissoes.js";
import reputacaoUsuarios from "./reputacaoUsuarios.js";
import trocaPedidos from "./trocaPedidos.js";
import usuarioCargos from "./usuarioCargos.js";
import usuarioPermissoes from "./usuarioPermissoes.js";
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
    permissoes,
    usuarioCargos,
    usuarioPermissoes,
    cargosPermissoes,
    reputacaoUsuarios
    );
}


export default router;
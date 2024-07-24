import { Router } from "express";
import UsuarioPermissoesController from "../controllers/usuarioPermissoesController.js";


const usuarioPermissoesController = new UsuarioPermissoesController();

const router = Router();

router
    .get('/usuario-permissoes', (req, res) => usuarioPermissoesController.pegaTodos(req, res))
    .get('/usuario-permissoes/:id', (req, res) => usuarioPermissoesController.pegaUmPorId(req, res))
    .post('/usuario-permissoes', (req, res) => usuarioPermissoesController.criaNovo(req, res))
    .put('/usuario-permissoes/:id', (req, res) => usuarioPermissoesController.atualiza(req, res))
    .delete('/usuario-permissoes/:id', (req, res) => usuarioPermissoesController.exclui(req, res))

export default router;
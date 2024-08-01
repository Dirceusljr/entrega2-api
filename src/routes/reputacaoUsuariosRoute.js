import { Router } from "express";
import ReputacaoUsuariosController from "../controllers/reputacaoUsuariosController.js";


const reputacaoUsuariosController = new ReputacaoUsuariosController();

const router = Router();

router
    .get('/reputacao-usuarios', (req, res) => reputacaoUsuariosController.pegaTodos(req, res))
    .get('/reputacao-usuarios/:id', (req, res) => reputacaoUsuariosController.pegaUmPorId(req, res))
    .post('/reputacao-usuarios', (req, res) => reputacaoUsuariosController.criaNovo(req, res))
    .put('/reputacao-usuarios/:id', (req, res) => reputacaoUsuariosController.atualiza(req, res))
    .delete('/reputacao-usuarios/:id', (req, res) => reputacaoUsuariosController.exclui(req, res))


export default router;
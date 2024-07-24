import { Router } from "express";
import ReputacaoUsuariosController from "../controllers/reputacaoUsuariosController.js";


const reputacaoUsuariosController = new ReputacaoUsuariosController();

const router = Router();

router
    .get('/reputacaoUsuarios', (req, res) => reputacaoUsuariosController.pegaTodos(req, res))
    .get('/reputacaoUsuarios/:id', (req, res) => reputacaoUsuariosController.pegaUmPorId(req, res))
    .post('/reputacaoUsuarios', (req, res) => reputacaoUsuariosController.criaNovo(req, res))
    .put('/reputacaoUsuarios/:id', (req, res) => reputacaoUsuariosController.atualiza(req, res))
    .delete('/reputacaoUsuarios/:id', (req, res) => reputacaoUsuariosController.exclui(req, res))


export default router;
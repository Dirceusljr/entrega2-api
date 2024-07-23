import { Router } from "express";
import PermissoesController from "../controllers/permissoesController.js";


const permissoesController = new PermissoesController();

const router = Router();

router
    .get('/permissoes', (req, res) => permissoesController.pegaTodos(req, res))
    .get('/permissoes/:id', (req, res) => permissoesController.pegaUmPorId(req, res))
    .post('/permissoes', (req, res) => permissoesController.criaNovo(req, res))
    .put('/permissoes/:id', (req, res) => permissoesController.atualiza(req, res))
    .delete('/permissoes/:id', (req, res) => permissoesController.exclui(req, res))


export default router;
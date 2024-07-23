import { Router } from "express";
import CargosPermissoesController from "../controllers/cargosPermissoesController.js";


const cargosPermissoesController = new CargosPermissoesController();

const router = Router();

router
    .get('/cargosPermissoes', (req, res) => cargosPermissoesController.pegaTodos(req, res))
    .get('/cargosPermissoes/:id', (req, res) => cargosPermissoesController.pegaUmPorId(req, res))
    .post('/cargosPermissoes', (req, res) => cargosPermissoesController.criaNovo(req, res))
    .put('/cargosPermissoes/:id', (req, res) => cargosPermissoesController.atualiza(req, res))
    .delete('/cargosPermissoes/:id', (req, res) => cargosPermissoesController.exclui(req, res))


export default router;
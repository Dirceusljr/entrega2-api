import { Router } from "express";
import CargosPermissoesController from "../controllers/cargosPermissoesController.js";


const cargosPermissoesController = new CargosPermissoesController();

const router = Router();

router
    .get('/cargos-permissoes', (req, res) => cargosPermissoesController.pegaTodos(req, res))
    .get('/cargos-permissoes/:id', (req, res) => cargosPermissoesController.pegaUmPorId(req, res))
    .post('/cargos-permissoes', (req, res) => cargosPermissoesController.criaNovo(req, res))
    .put('/cargos-permissoes/:id', (req, res) => cargosPermissoesController.atualiza(req, res))
    .delete('/cargos-permissoes/:id', (req, res) => cargosPermissoesController.exclui(req, res))


export default router;
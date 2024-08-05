import { Router } from "express";
import CargosController from "../controllers/cargosController.js";
import paginar from "../middlewares/paginar.js";


const cargosController = new CargosController();

const router = Router();

router
    .get('/cargos', (req, res, next) => cargosController.pegaTodos(req, res, next), paginar)
    .get('/cargos/:id', (req, res) => cargosController.pegaUmPorId(req, res))
    .post('/cargos', (req, res) => cargosController.criaNovo(req, res))
    .put('/cargos/:id', (req, res) => cargosController.atualiza(req, res))
    .delete('/cargos/:id', (req, res) => cargosController.exclui(req, res))


export default router;
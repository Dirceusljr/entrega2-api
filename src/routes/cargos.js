import { Router } from "express";
import CargosController from "../controllers/cargoController.js";


const cargosController = new CargosController();

const router = Router();

router
    .get('/cargos', (req, res) => cargosController.pegaTodos(req, res))
    .get('/cargos/:id', (req, res) => cargosController.pegaUmPorId(req, res))
    .post('/cargos', (req, res) => cargosController.criaNovo(req, res))
    .put('/cargos/:id', (req, res) => cargosController.atualiza(req, res))
    .delete('/cargos/:id', (req, res) => cargosController.exclui(req, res))


export default router;
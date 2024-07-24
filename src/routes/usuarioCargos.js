import { Router } from "express";
import UsuarioCargosController from "../controllers/usuarioCargosController.js";


const usuarioCargosController = new UsuarioCargosController();

const router = Router();

router
    .get('/usuario-cargos', (req, res) => usuarioCargosController.pegaTodos(req, res))
    .get('/usuario-cargos/:id', (req, res) => usuarioCargosController.pegaUmPorId(req, res))
    .post('/usuario-cargos', (req, res) => usuarioCargosController.criaNovo(req, res))
    .put('/usuario-cargos/:id', (req, res) => usuarioCargosController.atualiza(req, res))
    .delete('/usuario-cargos/:id', (req, res) => usuarioCargosController.exclui(req, res))


export default router;
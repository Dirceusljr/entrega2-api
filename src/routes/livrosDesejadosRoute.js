import { Router } from "express";
import LivrosDesejadosController from "../controllers/livrosDesejadosController.js";

const livrosDesejadosController = new LivrosDesejadosController();


const router = Router();

router
    .get('/livros-desejados', (req, res) => livrosDesejadosController.pegaTodos(req, res))
    .get('/livros-desejados/:id', (req, res) => livrosDesejadosController.pegaUmPorId(req, res))
    .post('/livros-desejados', (req, res) => livrosDesejadosController.criaNovo(req, res))
    .put('/livros-desejados/:id', (req, res) => livrosDesejadosController.atualiza(req, res))
    .delete('/livros-desejados/:id', (req, res) => livrosDesejadosController.exclui(req, res))

export default router;
import { Router } from "express";
import LivrosController from "../controllers/livrosController.js";

const livrosController = new LivrosController();

const router = Router();

router
    .get('/livros', (req, res) => livrosController.pegaTodos(req, res))
    .get('/livros/:id', (req, res) => livrosController.pegaUmPorId(req, res))
    .post('/livros', (req, res) => livrosController.criaNovo(req, res))
    .put('/livros/:id', (req, res) => livrosController.atualiza(req, res))
    .delete('/livros/:id', (req, res) => livrosController.exclui(req, res))

export default router;
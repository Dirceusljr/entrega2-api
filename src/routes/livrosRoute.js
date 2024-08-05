import { Router } from "express";
import LivrosController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";

const livrosController = new LivrosController();

const router = Router();

router
    .get('/livros', (req, res, next) => livrosController.pegaTodos(req, res, next), paginar)
    .get('/livros/:id', (req, res) => livrosController.pegaUmPorId(req, res))
    .post('/livros', (req, res) => livrosController.criaNovo(req, res))
    .put('/livros/:id', (req, res) => livrosController.atualiza(req, res))
    .delete('/livros/:id', (req, res) => livrosController.exclui(req, res))

export default router;
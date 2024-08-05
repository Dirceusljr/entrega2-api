import { Router } from "express";
import AvaliacaoLivrosController from "../controllers/avaliacaoLivrosController.js";
import paginar from "../middlewares/paginar.js";

const avaliacaoLivrosController = new AvaliacaoLivrosController();

const router = Router();

router
    .get('/avaliacao-livros', (req, res, next) => avaliacaoLivrosController.pegaTodos(req, res, next), paginar)
    .get('/avaliacao-livros/:id', (req, res) => avaliacaoLivrosController.pegaUmPorId(req, res))
    .post('/avaliacao-livros', (req, res) => avaliacaoLivrosController.criaNovo(req, res))
    .put('/avaliacao-livros/:id', (req, res) => avaliacaoLivrosController.atualiza(req, res))
    .delete('/avaliacao-livros/:id', (req, res) => avaliacaoLivrosController.exclui(req, res))


export default router;
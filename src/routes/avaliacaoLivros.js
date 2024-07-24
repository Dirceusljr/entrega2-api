import { Router } from "express";
import AvaliacaoLivrosController from "../controllers/avaliacaoLivrosController.js";

const avaliacaoLivrosController = new AvaliacaoLivrosController();

const router = Router();

router
    .get('/avaliacaoLivros', (req, res) => avaliacaoLivrosController.pegaTodos(req, res))
    .get('/avaliacaoLivros/:id', (req, res) => avaliacaoLivrosController.pegaUmPorId(req, res))
    .post('/avaliacaoLivros', (req, res) => avaliacaoLivrosController.criaNovo(req, res))
    .put('/avaliacaoLivros/:id', (req, res) => avaliacaoLivrosController.atualiza(req, res))
    .delete('/avaliacaoLivros/:id', (req, res) => avaliacaoLivrosController.exclui(req, res))


export default router;
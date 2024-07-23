import { Router } from "express";
import AvaliacaoLivrosController from "../controllers/avaliacaoLivrosController.js";

const avaliacaoLivrosController = new AvaliacaoLivrosController();

const router = Router();

router
    .get('/avaliacaoLivros', (req, res) => avaliacaoLivrosController.pegaTodos(req, res))
    .get('/avaliacaoLivros/:id', (req, res) => avaliacaoLivrosController.pegaUmPorId(req, res))
    .get('/avaliacaoLivros/usuario/:usuarioId', (req, res) => avaliacaoLivrosController.pegaUm(req, res)) //teste
    .post('/avaliacaoLivros', (req, res) => avaliacaoLivrosController.criaNovo(req, res));


export default router;
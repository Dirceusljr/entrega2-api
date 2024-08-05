import { Router } from "express";
import AvaliacaoLivrosController from "../controllers/avaliacaoLivrosController.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoLivrosAvaliacao, validacaoAtualizarAvaliacaoLivros, validacaoParametroLivroId } from '../middlewares/index.js'

const avaliacaoLivrosController = new AvaliacaoLivrosController();

const router = Router();

router
    .get('/avaliacao-livros', (req, res) => avaliacaoLivrosController.pegaTodos(req, res))
    .get('/avaliacao-livros/:id', celebrate(validacaoParametroLivroId), (req, res) => avaliacaoLivrosController.pegaUmPorId(req, res))
    .post('/avaliacao-livros', celebrate (validacaoLivrosAvaliacao), (req, res) => avaliacaoLivrosController.criaNovo(req, res))
    .put('/avaliacao-livros/:id', celebrate (validacaoAtualizarAvaliacaoLivros), celebrate(validacaoParametroLivroId), (req, res) => avaliacaoLivrosController.atualiza(req, res))
    .delete('/avaliacao-livros/:id', celebrate(validacaoParametroLivroId), (req, res) => avaliacaoLivrosController.exclui(req, res))

router.use(gerenciadorDeErros);

export default router;
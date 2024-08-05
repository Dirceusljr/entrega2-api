import { Router } from "express";
import LivrosController from "../controllers/livrosController.js";
import { validacaoCriarLivro, gerenciadorDeErros, atualizarLivroDoUsuario, validacaoParametroLivroId } from '../middlewares/index.js';
const livrosController = new LivrosController();
import { celebrate } from 'celebrate';

const router = Router();

router
    .get('/livros', (req, res) => livrosController.pegaTodos(req, res))
    .get('/livros/:id', celebrate(validacaoParametroLivroId), (req, res) => livrosController.pegaUmPorId(req, res))
    .post('/livros', celebrate(validacaoCriarLivro), (req, res) => livrosController.criaNovo(req, res))
    .put('/livros/:id', celebrate(atualizarLivroDoUsuario), celebrate(validacaoParametroLivroId), (req, res) => livrosController.atualiza(req, res))
    .delete('/livros/:id', celebrate(validacaoParametroLivroId), (req, res) => livrosController.exclui(req, res))

router.use(gerenciadorDeErros);

export default router;
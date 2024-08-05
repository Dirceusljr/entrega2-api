import { Router } from "express";
import { celebrate } from 'celebrate';
import LivrosController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";
import autorizacao from "../middlewares/autorizacao.js";
import { validacaoCriarLivro, gerenciadorDeErros, atualizarLivroDoUsuario, validacaoParametroLivroId } from '../utils/index.js';

const livrosController = new LivrosController();
const router = Router();

router
    .get('/livros', (req, res, next) => livrosController.pegaTodos(req, res, next), paginar)
    .get('/livros/:id', celebrate(validacaoParametroLivroId), (req, res) => livrosController.pegaUmPorId(req, res))
    .post('/livros', celebrate(validacaoCriarLivro), (req, res) => livrosController.criaNovo(req, res))
    .put('/livros/:id', celebrate(atualizarLivroDoUsuario), celebrate(validacaoParametroLivroId), (req, res) => livrosController.atualiza(req, res))
    .delete('/livros/:id', autorizacao(["Dev","Admin"]), celebrate(validacaoParametroLivroId), (req, res) => livrosController.exclui(req, res))

router.use(gerenciadorDeErros);

export default router;
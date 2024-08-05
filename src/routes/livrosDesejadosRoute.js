import { Router } from "express";
import LivrosDesejadosController from "../controllers/livrosDesejadosController.js";
import paginar from "../middlewares/paginar.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoLivrosDesejados, validacaoAtualizarLivrosDesejados,validacaoParametroLivroId } from '../middlewares/index.js'

const livrosDesejadosController = new LivrosDesejadosController();


const router = Router();

router
    .get('/livros-desejados', (req, res, next) => livrosDesejadosController.pegaTodos(req, res, next), paginar)
    .get('/livros-desejados/:id', celebrate(validacaoParametroLivroId), (req, res) => livrosDesejadosController.pegaUmPorId(req, res))
    .post('/livros-desejados', celebrate(validacaoLivrosDesejados), (req, res) => livrosDesejadosController.criaNovo(req, res))
    .put('/livros-desejados/:id', celebrate(validacaoAtualizarLivrosDesejados), celebrate(validacaoParametroLivroId), (req, res) => livrosDesejadosController.atualiza(req, res))
    .delete('/livros-desejados/:id', celebrate(validacaoParametroLivroId), (req, res) => livrosDesejadosController.exclui(req, res))

router.use(gerenciadorDeErros);


export default router;
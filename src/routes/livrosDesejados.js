import { Router } from "express";
import LivrosDesejadosController from "../controllers/livrosDesejadosController.js";


const router = Router();

router
    .get('/livros-desejados', LivrosDesejadosController.buscarTodosLivrosDesejados)
    .get('/livros-desejados/:id', LivrosDesejadosController.buscarLivroDesejadoPorId)
    .post('/livros-desejados', LivrosDesejadosController.cadastrarLivroDesejado)
    .put('/livros-desejados/:id', LivrosDesejadosController.editarLivroDesejadoPorId)
    .delete('/livros-desejados/:id', LivrosDesejadosController.deletarLivroDesejadoPorId)


export default router;
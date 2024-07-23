import { Router } from "express";
import LivrosDesejadosController from "../controllers/livrosDesejadosController.js";


const router = Router();

router
    .get('/livrosDesejados', LivrosDesejadosController.buscarTodosLivrosDesejados)
    .get('/livrosDesejados/:id', LivrosDesejadosController.buscarLivroDesejadoPorId)
    .post('/livrosDesejados', LivrosDesejadosController.cadastrarLivroDesejado)
    .put('/livrosDesejados/:id', LivrosDesejadosController.editarLivroDesejadoPorId)
    .delete('/livrosDesejados/:id', LivrosDesejadosController.deletarLivroDesejadoPorId)


export default router;
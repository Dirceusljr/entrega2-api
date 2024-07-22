import { Router } from "express";
import LivrosController from "../controllers/livrosController.js";


const router = Router();

router
    .get('/livros', LivrosController.buscarTodosOsLivros)
    .get('/livros/:id', LivrosController.buscarLivroPorId)
    .post('/livros', LivrosController.cadastrarLivro)
    .put('/livros/:id', LivrosController.editarLivro)
    .delete('/livros/:id', LivrosController.deletarLivro)

export default router;
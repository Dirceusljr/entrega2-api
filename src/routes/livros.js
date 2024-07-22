import { Router } from "express";
import LivrosController from "../controllers/livrosController.js";


const router = Router();

router
    .post('/livros', LivrosController.cadastrarLivro)

export default router;
import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";


const router = Router();

router
    .post('/usuarios', UsuariosController.criarNovo);

export default router;
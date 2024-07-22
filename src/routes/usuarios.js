import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";


const router = Router();

router
    .get('/usuarios', UsuariosController.buscarTodosOsUsuarios)
    .post('/usuarios', UsuariosController.criarNovo);

export default router;
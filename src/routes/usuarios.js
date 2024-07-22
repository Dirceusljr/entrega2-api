import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";


const router = Router();

router
    .get('/usuarios', UsuariosController.buscarTodosOsUsuarios)
    .get('/usuarios/:id', UsuariosController.buscarUsuarioPorId)
    .post('/usuarios', UsuariosController.criarNovo)
    .put('/usuarios/:id', UsuariosController.atualizarUsuario)

export default router;
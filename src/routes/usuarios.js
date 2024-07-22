import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";


const router = Router();

router
    .get('/usuarios', UsuariosController.buscarTodosOsUsuarios)
    .get('/usuarios/:id', UsuariosController.buscarUsuarioPorId)
    .post('/usuarios', UsuariosController.cadastrarUsuario)
    .put('/usuarios/:id', UsuariosController.editarUsuario)
    .delete('/usuarios/:id', UsuariosController.deletarUsuarioPorId)

export default router;
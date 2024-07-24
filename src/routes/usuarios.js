import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";


const router = Router();

router.use(
    autenticado
)

router
    .get('/usuarios', UsuariosController.buscarTodosOsUsuarios)
    .get('/usuarios/:id', UsuariosController.buscarUsuarioPorId)
    .get('/usuarios/:usuarioId/livros', LivrosController.buscarLivrosPorUsuarioId)
    .post('/usuarios', UsuariosController.cadastrarUsuario)
    .post('/usuarios/:usuarioId/livros', LivrosController.cadastrarLivroParaUsuario)
    .put('/usuarios/:id', UsuariosController.editarUsuario)
    .put('/usuarios/:usuarioId/livros/:id', LivrosController.editarLivroDoUsuario)
    .delete('/usuarios/:id', UsuariosController.deletarUsuarioPorId)
    .delete('/usuarios/:usuarioId/livros/:id', LivrosController.deletarLivroDoUsuario)

export default router;
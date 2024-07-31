import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";

const router = Router();

const usuariosController = new UsuariosController();

router.post("/usuarios", (req, res) => usuariosController.criaNovo(req, res));

router.use(autenticado);

router
  .get("/usuarios", (req, res) => usuariosController.pegaTodos(req, res))
  .get("/usuarios/:id", (req, res) => usuariosController.pegaUmPorId(req, res))
  .get("/usuarios/:usuarioId/livros", LivrosController.buscarLivrosPorUsuarioId)
  .post("/usuarios/:usuarioId/livros", LivrosController.cadastrarLivroParaUsuario)
  .put("/usuarios/:id", (req, res) => usuariosController.atualiza(req, res))
  .put("/usuarios/:usuarioId/livros/:id", LivrosController.editarLivroDoUsuario)
  .delete("/usuarios/:id", (req, res) => usuariosController.exclui(req, res))
  .delete("/usuarios/:usuarioId/livros/:id", LivrosController.deletarLivroDoUsuario);

export default router;

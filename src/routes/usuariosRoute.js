import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";
import { celebrate } from "celebrate";
import usuarioNovoSchema from "../utils/schemas/usuarioNovoSchema.js";
import usuarioExistenteSchema from "../utils/schemas/usuarioExistenteSchema.js";

const router = Router();

const usuariosController = new UsuariosController();
const livrosController = new LivrosController();

router.post("/usuarios", celebrate(usuarioNovoSchema), (req, res) => usuariosController.criaNovo(req, res));

router.use(autenticado);

router
  .get("/usuarios", (req, res) => usuariosController.pegaTodos(req, res))
  .get("/usuarios/:id", (req, res) => usuariosController.pegaUmPorId(req, res))
  .get("/usuarios/:usuarioId/livros", (req, res) => livrosController.pegaLivrosPorUsuarioId(req, res))
  .post("/usuarios/:usuarioId/livros", (req, res) => livrosController.cadastraLivroParaUsuario(req, res))
  .put("/usuarios/:id", celebrate(usuarioExistenteSchema), (req, res) => usuariosController.atualiza(req, res))
  .put("/usuarios/:usuarioId/livros/:id", (req, res) => livrosController.atualizaLivroDoUsuario(req, res))
  .delete("/usuarios/:id",  (req, res) => usuariosController.exclui(req, res))
  .delete("/usuarios/:usuarioId/livros/:id", (req, res) => livrosController.excluiLivroDoUsuario(req, res));

export default router;

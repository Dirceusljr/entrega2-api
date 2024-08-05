import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";
import { celebrate, Segments } from "celebrate";

import usuarioSchema from "../utils/schemas/usuarioSchema.js";
import validadorSchema from "../utils/schemas/validadorSchema.js";
import paginar from "../middlewares/paginar.js";

const router = Router();

const usuariosController = new UsuariosController();
const livrosController = new LivrosController();



router.post("/usuarios",celebrate({[Segments.BODY]: validadorSchema(usuarioSchema)}),  (req, res) => usuariosController.criaNovo(req, res));

router.use(autenticado);

router
  .get("/usuarios", (req, res, next) => usuariosController.pegaTodos(req, res, next), paginar)
  .get("/usuarios/:id", (req, res) => usuariosController.pegaUmPorId(req, res))
  .get("/usuarios/:usuarioId/livros", (req, res, next) => livrosController.pegaLivrosPorUsuarioId(req, res, next), paginar)
  .post("/usuarios/:usuarioId/livros", (req, res) => livrosController.cadastraLivroParaUsuario(req, res))
  .put("/usuarios/:id", celebrate({[Segments.BODY]: validadorSchema(usuarioSchema, "senha", true)}), (req, res) => usuariosController.atualiza(req, res))
  .put("/usuarios/:usuarioId/livros/:id", (req, res) => livrosController.atualizaLivroDoUsuario(req, res))
  .delete("/usuarios/:id",  (req, res) => usuariosController.exclui(req, res))
  .delete("/usuarios/:usuarioId/livros/:id", (req, res) => livrosController.excluiLivroDoUsuario(req, res));

export default router;

import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoCriarUsuario, validacaoCriarLivro, validacaoAtualizarUsuario, atualizarLivroDoUsuario, validacaoParametroUsuarioId } from '../middlewares/index.js';

const router = Router();

const usuariosController = new UsuariosController();
const livrosController = new LivrosController();

router.post("/usuarios", celebrate(validacaoCriarUsuario), (req, res) => usuariosController.criaNovo(req, res));

router.use(autenticado);

router
  .get("/usuarios", (req, res) => usuariosController.pegaTodos(req, res))
  .get("/usuarios/:id", celebrate(validacaoParametroUsuarioId), (req, res) => usuariosController.pegaUmPorId(req, res))
  .get("/usuarios/:usuarioId/livros", celebrate(validacaoParametroUsuarioId), (req, res) => livrosController.pegaLivrosPorUsuarioId(req, res))
  .post("/usuarios/:usuarioId/livros", celebrate(validacaoCriarLivro), celebrate(validacaoParametroUsuarioId), (req, res) => livrosController.cadastraLivroParaUsuario(req, res))
  .put("/usuarios/:id", celebrate(validacaoAtualizarUsuario), celebrate(validacaoParametroUsuarioId), (req, res) => usuariosController.atualiza(req, res))
  .put("/usuarios/:usuarioId/livros/:id", celebrate(atualizarLivroDoUsuario), (req, res) => livrosController.atualizaLivroDoUsuario(req, res))
  .delete("/usuarios/:id", celebrate(validacaoParametroUsuarioId),  (req, res) => usuariosController.exclui(req, res))
  .delete("/usuarios/:usuarioId/livros/:id", celebrate(validacaoParametroUsuarioId), (req, res) => livrosController.excluiLivroDoUsuario(req, res));

router.use(gerenciadorDeErros);

export default router;

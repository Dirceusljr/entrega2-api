import { Router } from "express";
import { celebrate } from "celebrate";
import UsuariosController from "../controllers/usuariosController.js";
import LivrosController from "../controllers/livrosController.js";
import autenticado from "../middlewares/autenticado.js";
import paginar from "../middlewares/paginar.js";
import autorizacao from "../middlewares/autorizacao.js";
import { gerenciadorDeErros, validacaoCriarUsuario, validacaoAtualizarUsuario, atualizarLivroDoUsuario, validacaoParametroUsuarioId } from '../utils/index.js';
import { validacaoCriarLivroDoUsuario } from "../utils/validacao/livrosValidacao.js";


const router = Router();

const usuariosController = new UsuariosController();
const livrosController = new LivrosController();

router.post("/usuarios", celebrate(validacaoCriarUsuario), (req, res) => usuariosController.criaNovo(req, res));

router.use(autenticado);

router
  .get("/usuarios", (req, res, next) => usuariosController.pegaTodos(req, res, next), paginar)
  .get("/usuarios/:id", celebrate(validacaoParametroUsuarioId), (req, res) => usuariosController.pegaUmPorId(req, res))
  .get("/usuarios/:usuarioId/livros", celebrate(validacaoParametroUsuarioId), (req, res, next) => livrosController.pegaLivrosPorUsuarioId(req, res, next), paginar)
  .post("/usuarios/:usuarioId/livros", celebrate(validacaoCriarLivroDoUsuario), celebrate(validacaoParametroUsuarioId), (req, res) => livrosController.cadastraLivroParaUsuario(req, res))
  .put("/usuarios/:id", autorizacao(["Dev","Admin"]), celebrate(validacaoAtualizarUsuario), celebrate(validacaoParametroUsuarioId), (req, res) => usuariosController.atualiza(req, res))
  .put("/usuarios/:usuarioId/livros/:id", celebrate(atualizarLivroDoUsuario), (req, res) => livrosController.atualizaLivroDoUsuario(req, res))
  .delete("/usuarios/:id", autorizacao(["Dev","Admin"]), celebrate(validacaoParametroUsuarioId),  (req, res) => usuariosController.exclui(req, res))
  .delete("/usuarios/:usuarioId/livros/:id", celebrate(validacaoParametroUsuarioId), (req, res) => livrosController.excluiLivroDoUsuario(req, res));

router.use(gerenciadorDeErros);

export default router;

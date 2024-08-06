import { Router } from "express";
import UsuarioCargosController from "../controllers/usuarioCargosController.js";
import paginar from "../middlewares/paginar.js";
import autorizacao from "../middlewares/autorizacao.js";
import { celebrate } from "celebrate";
import { gerenciadorDeErros, validacaoUsuarioCargos, validacaoParametroUsuarioId } from '../utils/index.js';

const usuarioCargosController = new UsuarioCargosController();

const router = Router();

router
    .get('/usuario-cargos', (req, res, next) => usuarioCargosController.pegaTodos(req, res, next), paginar)
    .get('/usuario-cargos/:id', celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.pegaUmPorId(req, res))
    .post('/usuario-cargos', autorizacao(["Dev","Admin"]), celebrate(validacaoUsuarioCargos), (req, res) => usuarioCargosController.criaNovo(req, res))
    .put('/usuario-cargos/:id', autorizacao(["Dev","Admin"]), celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.atualiza(req, res))
    .delete('/usuario-cargos/:id', autorizacao(["Dev","Admin"]), celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.exclui(req, res))

    router.use(gerenciadorDeErros);

export default router;
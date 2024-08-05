import { Router } from "express";
import ReputacaoUsuariosController from "../controllers/reputacaoUsuariosController.js";
import paginar from "../middlewares/paginar.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoCriarReputacao, validacaoAtualizarReputacao, validacaoParametroUsuarioId, validacaoParametroExcluirUsuarioId } from '../middlewares/index.js'

const reputacaoUsuariosController = new ReputacaoUsuariosController();

const router = Router();

router
    .get('/reputacao-usuarios', (req, res, next) => reputacaoUsuariosController.pegaTodos(req, res, next), paginar)
    .get('/reputacao-usuarios/:id', celebrate(validacaoParametroUsuarioId), (req, res) => reputacaoUsuariosController.pegaUmPorId(req, res))
    .post('/reputacao-usuarios', celebrate(validacaoCriarReputacao), (req, res) => reputacaoUsuariosController.criaNovo(req, res))
    .put('/reputacao-usuarios/:id', celebrate(validacaoAtualizarReputacao), (req, res) => reputacaoUsuariosController.atualiza(req, res))
    .delete('/reputacao-usuarios/:id', celebrate(validacaoParametroExcluirUsuarioId), (req, res) => reputacaoUsuariosController.exclui(req, res))

router.use(gerenciadorDeErros);

export default router;
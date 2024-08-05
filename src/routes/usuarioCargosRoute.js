import { Router } from "express";
import UsuarioCargosController from "../controllers/usuarioCargosController.js";
import { celebrate } from "celebrate";
import { gerenciadorDeErros, validacaoUsuarioCargos, validacaoParametroUsuarioId } from '../middlewares/index.js';

const usuarioCargosController = new UsuarioCargosController();

const router = Router();

router
    .get('/usuario-cargos', (req, res) => usuarioCargosController.pegaTodos(req, res))
    .get('/usuario-cargos/:id', celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.pegaUmPorId(req, res))
    .post('/usuario-cargos', celebrate(validacaoUsuarioCargos), (req, res) => usuarioCargosController.criaNovo(req, res))
    .put('/usuario-cargos/:id', celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.atualiza(req, res))
    .delete('/usuario-cargos/:id', celebrate(validacaoParametroUsuarioId), (req, res) => usuarioCargosController.exclui(req, res))

    router.use(gerenciadorDeErros);

export default router;
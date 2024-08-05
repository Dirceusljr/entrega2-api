import { Router } from "express";
import CargosController from "../controllers/cargosController.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoCargos, validacaoParametroCargosId } from '../middlewares/index.js'


const cargosController = new CargosController();

const router = Router();

router
    .get('/cargos', (req, res) => cargosController.pegaTodos(req, res))
    .get('/cargos/:id', celebrate(validacaoParametroCargosId), (req, res) => cargosController.pegaUmPorId(req, res))
    .post('/cargos', celebrate(validacaoCargos), (req, res) => cargosController.criaNovo(req, res))
    .put('/cargos/:id', celebrate(validacaoCargos), celebrate(validacaoParametroCargosId), (req, res) => cargosController.atualiza(req, res))
    .delete('/cargos/:id', celebrate(validacaoParametroCargosId), (req, res) => cargosController.exclui(req, res))

    router.use(gerenciadorDeErros);

export default router;
import { Router } from "express";
import CargosController from "../controllers/cargosController.js";
import paginar from "../middlewares/paginar.js";
import autorizacao from "../middlewares/autorizacao.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoCargos, validacaoParametroCargosId } from '../utils/index.js'


const cargosController = new CargosController();

const router = Router();

router
    .get('/cargos', (req, res, next) => cargosController.pegaTodos(req, res, next), paginar)
    .get('/cargos/:id', celebrate(validacaoParametroCargosId), (req, res) => cargosController.pegaUmPorId(req, res))
    .post('/cargos', celebrate(validacaoCargos), (req, res) => cargosController.criaNovo(req, res))
    .put('/cargos/:id', autorizacao(["Dev","Admin"]), celebrate(validacaoCargos), celebrate(validacaoParametroCargosId), (req, res) => cargosController.atualiza(req, res))
    .delete('/cargos/:id', autorizacao(["Dev","Admin"]), celebrate(validacaoParametroCargosId), (req, res) => cargosController.exclui(req, res))


    router.use(gerenciadorDeErros);

export default router;
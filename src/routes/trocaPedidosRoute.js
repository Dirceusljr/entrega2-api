import { Router } from "express";
import TrocaPedidosController from "../controllers/trocaPedidosController.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoTrocaPedido, validacaoTrocaPedidoParametro } from '../middlewares/index.js'

const trocaPedidosController = new TrocaPedidosController();

const router = Router();

router
    .get('/troca-pedidos', (req, res) => trocaPedidosController.pegaTodos(req, res))
    .get('/troca-pedidos/:id', celebrate(validacaoTrocaPedidoParametro), (req, res) => trocaPedidosController.pegaUmPorId(req, res))
    .post('/troca-pedidos', celebrate(validacaoTrocaPedido), (req, res) => trocaPedidosController.criaNovo(req, res))
    .put('/troca-pedidos/:id', celebrate(validacaoTrocaPedidoParametro), (req, res) => trocaPedidosController.atualiza(req, res))
    .delete('/troca-pedidos/:id', celebrate(validacaoTrocaPedidoParametro), (req, res) => trocaPedidosController.exclui(req, res))

    router.use(gerenciadorDeErros);

export default router;
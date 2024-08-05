import { Router } from "express";
import TrocaPedidosController from "../controllers/trocaPedidosController.js";
import paginar from "../middlewares/paginar.js";


const trocaPedidosController = new TrocaPedidosController();

const router = Router();

router
    .get('/troca-pedidos', (req, res, next) => trocaPedidosController.pegaTodos(req, res, next), paginar)
    .get('/troca-pedidos/:id', (req, res) => trocaPedidosController.pegaUmPorId(req, res))
    .post('/troca-pedidos', (req, res) => trocaPedidosController.criaNovo(req, res))
    .put('/troca-pedidos/:id', (req, res) => trocaPedidosController.atualiza(req, res))
    .delete('/troca-pedidos/:id', (req, res) => trocaPedidosController.exclui(req, res))


export default router;
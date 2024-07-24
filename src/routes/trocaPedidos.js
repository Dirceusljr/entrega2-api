import { Router } from "express";
import TrocaPedidosController from "../controllers/trocaPedidosController.js";


const trocaPedidosController = new TrocaPedidosController();

const router = Router();

router
    .get('/trocaPedidos', (req, res) => trocaPedidosController.pegaTodos(req, res))
    .get('/trocaPedidos/:id', (req, res) => trocaPedidosController.pegaUmPorId(req, res))
    .post('/trocaPedidos', (req, res) => trocaPedidosController.criaNovo(req, res))
    .put('/trocaPedidos/:id', (req, res) => trocaPedidosController.atualiza(req, res))
    .delete('/trocaPedidos/:id', (req, res) => trocaPedidosController.exclui(req, res))


export default router;
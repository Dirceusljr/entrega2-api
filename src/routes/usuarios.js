import { Router } from "express";
import UsuariosController from "../controllers/usuariosController.js";


const router = Router();

router
    .get('/', UsuariosController.teste);

export default router;
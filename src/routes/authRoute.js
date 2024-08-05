import { Router } from "express";
import AuthController from "../controllers/authController.js";
import { celebrate } from 'celebrate';
import { gerenciadorDeErros, validacaoAuth } from '../middlewares/index.js'

const router = Router();

router
    .post('/auth/login', celebrate(validacaoAuth), AuthController.login)

router.use(gerenciadorDeErros);

export default router;
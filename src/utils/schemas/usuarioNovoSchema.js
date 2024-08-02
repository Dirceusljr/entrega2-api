import Joi from "joi";
import mensagemErro from "../errors/mensagemErro.js";
import { Segments } from "celebrate";

const regex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;

const usuarioNovoSchema = {
    [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required().max(100).messages(mensagemErro('nome')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().max(100).messages(mensagemErro('email')),
    senha: Joi.string().required().min(6).max(20).pattern(new RegExp(regex)).messages(mensagemErro('senha'))
})}

export default usuarioNovoSchema
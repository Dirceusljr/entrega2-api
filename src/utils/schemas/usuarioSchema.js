import Joi from "joi";
import mensagemErro from "../errors/mensagemErro.js";
import { Segments } from "celebrate";

const regex = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/;

const usuarioSchema = {
    nome: Joi.string().required().max(100).messages(mensagemErro('nome')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required().max(100).messages(mensagemErro('email')),
    senha: Joi.string().required().min(6).max(20).pattern(new RegExp(regex)).messages(mensagemErro('senha')),
    reputacao: Joi.number().precision(1).min(0).max(5).prefs({ convert: false }).messages(mensagemErro('reputacao'))
}

export default usuarioSchema
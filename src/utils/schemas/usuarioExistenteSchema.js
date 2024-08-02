import Joi from "joi";
import mensagemErro from "../errors/mensagemErro.js";
import { Segments } from "celebrate";

const usuarioExistenteSchema = {
    [Segments.BODY]: Joi.object().keys({
    nome: Joi.string().required().max(100).messages(mensagemErro('nome')),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required().max(100).messages(mensagemErro('email')),
    reputacao: Joi.number().precision(1).min(0).max(5).prefs({ convert: false }).messages(mensagemErro('reputacao'))
})}

export default usuarioExistenteSchema
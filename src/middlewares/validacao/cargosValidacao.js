import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoCargos = {
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('id')),
        nome: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('nome')),
        descricao: Joi.string().min(0).max(800).allow(null).required().messages(mensagensCustomizadas('descricao'))
    }).options({ abortEarly: false})
}

const validacaoParametroCargosId = {
    [Segments.PARAMS]: Joi.object().keys({
        usuarioId: Joi.string().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('usuarioId')),
        id: Joi.string().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('id'))
    }).options({ abortEarly: false})
}

export { validacaoCargos, validacaoParametroCargosId }
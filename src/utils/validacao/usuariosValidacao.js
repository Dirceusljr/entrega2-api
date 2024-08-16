import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoCriarUsuario = {
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().min(2).max(200).required().messages(mensagensCustomizadas('nome')),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).messages(mensagensCustomizadas('email')),
        senha: Joi.string().min(6).max(100).required().messages(mensagensCustomizadas('senha')),
    }).options({ abortEarly: false})
}

const validacaoAtualizarUsuario = {
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().min(2).max(200).required().messages(mensagensCustomizadas('nome')),
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).messages(mensagensCustomizadas('email')),
        reputacao: Joi.number().min(0).max(5).precision(1).required().messages(mensagensCustomizadas('reputação')),
    }).options({ abortEarly: false })   
}

const validacaoParametroUsuarioId = {
    [Segments.PARAMS]: Joi.object().keys({
        usuarioId: Joi.string().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('usuarioId')),
        id: Joi.string().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('id'))
    }).options({ abortEarly: false }) 
}

const validacaoParametroExcluirUsuarioId = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('id'))
    }).options({ abortEarly: false }) 
}

export { validacaoCriarUsuario, validacaoAtualizarUsuario, validacaoParametroUsuarioId, validacaoParametroExcluirUsuarioId }
import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoCriarReputacao = {
    [Segments.BODY]: Joi.object().keys({
        trocaId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('trocaId')),
        usuarioDeId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('usuarioDeId')),
        usuarioParaId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('usuarioParaId')),
        avaliacao: Joi.number().min(0).max(5).precision(1).required().messages(mensagensCustomizadas('avaliacao')),
        comentario: Joi.string().min(2).max(800).messages(mensagensCustomizadas('comentario')),
    }).options({ abortEarly: false})
}

const validacaoAtualizarReputacao = {
    [Segments.BODY]: Joi.object().keys({
        trocaId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('trocaId')),
        usuarioDeId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('usuarioDeId')),
        usuarioParaId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('usuarioParaId')),
        avaliacao: Joi.number().min(0).max(5).precision(1).required().messages(mensagensCustomizadas('avaliacao')),
        comentario: Joi.string().min(2).max(800).messages(mensagensCustomizadas('comentario')),
    }).options({ abortEarly: false})
}

export { validacaoCriarReputacao, validacaoAtualizarReputacao }


import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoLivrosDesejados = {
    [Segments.BODY]: Joi.object().keys({
        usuarioId: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('usuarioId')),
        titulo: Joi. string().min(2).max(300).required().messages(mensagensCustomizadas('titulo')),
        autor: Joi.string().min(2).max(500).required().messages(mensagensCustomizadas('autor')),
        linkCapa: Joi.string().min(2).max(200).optional(),
    }).options({ abortEarly: false})

}

const validacaoAtualizarLivrosDesejados = {
    [Segments.BODY]: Joi.object().keys({
        usuarioId: Joi.string().min(2).max(300).messages(mensagensCustomizadas('usuarioId')),
        titulo: Joi. string().min(2).max(300).messages(mensagensCustomizadas('titulo')),
        autor: Joi.string().min(2).max(500).messages(mensagensCustomizadas('autor')),
        linkCapa: Joi.string().min(2).max(200).optional(),
    }).options({ abortEarly: false})

}

export { validacaoLivrosDesejados, validacaoAtualizarLivrosDesejados }
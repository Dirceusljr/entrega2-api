import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoCriarLivro = {
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('titulo')),
        autor: Joi. string().min(2).max(300).required().messages(mensagensCustomizadas('autor')),
        usuarioId: Joi.string().min(2).max(500).required().messages(mensagensCustomizadas('usuarioId')),
        linkCapa: Joi.string().max(200).optional(),
        editora: Joi.string().max(200).optional(),
        genero: Joi.string().max(200).optional(),
        paginas: Joi.number().integer().optional(),
        avaliacao: Joi.number().precision(1).min(0).max(5).allow(null).optional(),
        disponibilidade: Joi.boolean().messages(mensagensCustomizadas('disponibilidade')),
    }).options({ abortEarly: false})
}

const validacaoCriarLivroDoUsuario = {
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('titulo')),
        autor: Joi. string().min(2).max(300).required().messages(mensagensCustomizadas('autor')),
        linkCapa: Joi.string().optional().allow(null || ''),
        editora: Joi.string().optional().allow(null || ''),
        genero: Joi.string().optional().allow(null || ''),
        paginas: Joi.number().optional().integer().allow(null),
        avaliacao: Joi.number().precision(1).min(0).max(5).allow(null).optional(),
        disponibilidade: Joi.boolean().messages(mensagensCustomizadas('disponibilidade')),
    }).options({ abortEarly: false})
}

const atualizarLivroDoUsuario = {
    [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('titulo')),
        autor: Joi. string().min(2).max(300).required().messages(mensagensCustomizadas('autor')),
        linkCapa: Joi.string().optional().allow(null || ''),
        editora: Joi.string().optional().allow(null || ''),
        genero: Joi.string().optional().allow(null || ''),
        paginas: Joi.number().optional().integer().allow(null),
        avaliacao: Joi.number().precision(1).min(0).max(5).allow(null).optional(),
        disponibilidade: Joi.boolean().messages(mensagensCustomizadas('disponibilidade'))
    })
}

const validacaoParametroLivroId = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required().guid({ version: 'uuidv4'}).messages(mensagensCustomizadas('id'))
    }).options({ abortEarly: false }) 
}


export { validacaoCriarLivro, atualizarLivroDoUsuario, validacaoParametroLivroId, validacaoCriarLivroDoUsuario }
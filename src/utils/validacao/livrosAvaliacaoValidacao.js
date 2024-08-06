import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoLivrosAvaliacao = {
    [Segments.BODY]: Joi.object().keys({
        livroId: Joi.string().min(2).max(300).required().messages(mensagensCustomizadas('livroId')),
        usuarioId: Joi. string().min(2).max(300).required().messages(mensagensCustomizadas('usuarioId')),
        avaliacao: Joi.number().precision(1).min(0).max(5).required().messages(mensagensCustomizadas('avaliacao')),
        comentario: Joi.string().max(500).optional().allow(null, "").messages(mensagensCustomizadas('comentario'))
    }).options({ abortEarly: false})

}

const validacaoAtualizarAvaliacaoLivros = {
    [Segments.BODY]: Joi.object().keys({
        livroId: Joi.string().min(2).max(300).messages(mensagensCustomizadas('livroId')),
        usuarioId: Joi. string().min(2).max(300).messages(mensagensCustomizadas('usuarioId')),
        avaliacao: Joi.number().precision(1).min(0).max(5).required(),
        comentario: Joi.string().max(500).optional().allow(null, "").messages(mensagensCustomizadas('comentario'))
    }).options({ abortEarly: false})
}

export { validacaoLivrosAvaliacao, validacaoAtualizarAvaliacaoLivros }
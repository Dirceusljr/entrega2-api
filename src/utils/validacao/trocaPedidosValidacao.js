import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoTrocaPedido = {
    [Segments.BODY]: Joi.object().keys({
        usuarioDeId: Joi.string().required().messages(mensagensCustomizadas('usuarioDeId')),
        livroDeId: Joi.string().required().messages(mensagensCustomizadas('livroDeId')),
        usuarioParaId: Joi.string().required().messages(mensagensCustomizadas('usuarioParaId')),
        livroParaId: Joi.string().required().messages(mensagensCustomizadas('livroParaId')),
    }).options({ abortEarly: false})
}

const validacaoTrocaPedidoParametro = {
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().guid({ version: 'uuidv4'}).required().messages(mensagensCustomizadas('id'))
    })
}

const atualizacaoTrocaPedido = {
    [Segments.BODY]: Joi.object().keys({
        usuarioDeId: Joi.string().required().messages(mensagensCustomizadas('usuarioDeId')),
        livroDeId: Joi.string().required().messages(mensagensCustomizadas('livroDeId')),
        usuarioParaId: Joi.string().required().messages(mensagensCustomizadas('usuarioParaId')),
        livroParaId: Joi.string().required().messages(mensagensCustomizadas('livroParaId')),
        status: Joi.string().required().valid("aprovado", "rejeitado", "pendente").messages(mensagensCustomizadas('status')),
    }).options({ abortEarly: false})
}

export { validacaoTrocaPedido, validacaoTrocaPedidoParametro, atualizacaoTrocaPedido }
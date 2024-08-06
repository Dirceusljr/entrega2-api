import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../validacoesMensagens/mensagensCustomizadas.js';

const validacaoUsuarioCargos = {
    [Segments.BODY]: Joi.object().keys({
        usuarioId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('usuarioId')),
        cargoId: Joi.string().min(2).max(800).required().messages(mensagensCustomizadas('cargoId')),
    }).options({ abortEarly: false})

}

export { validacaoUsuarioCargos }
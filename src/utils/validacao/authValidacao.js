import { Joi, Segments } from 'celebrate';
import { mensagensCustomizadas } from '../../utils/validacoesMensagens/mensagensCustomizadas.js';

const validacaoAuth = {
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email().messages(mensagensCustomizadas('email')),
        senha: Joi.string().required().messages(mensagensCustomizadas('senha'))
    })
}

export { validacaoAuth }
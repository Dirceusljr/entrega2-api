import { CelebrateError } from 'celebrate'

const gerenciadorDeErros = (err, req, res, next) => {
    if (err instanceof CelebrateError) {

        const mensagens = [];

        const errorBody = err.details.get('body')

        if (errorBody) {
            mensagens.push(
                ...errorBody.details.map(detail => ({
                    field: detail.path.join('.'),
                    mensagem: detail.message
                }))
            );
        }

    const errorParams = err.details.get('params');
    if (errorParams) {
        mensagens.push (
            ...errorParams.details.map(detail => ({
            field: `params.${detail.path.join('.')}`,
            mensagem: detail.message
        }))
    );
    }

    const errorQuery = err.details.get('query');
    if(errorQuery) {
        mensagens.push(
            ...errorQuery.details.map(detail => ({
            field: `query.${detail.path.join('.')}`,
            mensagem: detail.message
        }))
    );
    }

    const errorHeaders = err.details.get('headers');
        if (errorHeaders) {
            mensagens.push(
                ...errorHeaders.details.map(detail => ({
                    field: `headers.${detail.path.join('.')}`,
                    mensagem: detail.message
                }))
            );
    }
    
    if (mensagens.length > 0) {
        return res.status(400).json({
            status: 'Erro de Validação',
            errors: mensagens
        });
    }
}

return res.status(500).json({
    status: 'Error',
    message: `Erro interno no servidor: ${err.message}`
});
};

export default gerenciadorDeErros;
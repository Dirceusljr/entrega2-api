class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos (req, res, next) {
        try {
            const listaEntidades = await this.entidadeService.pegaTodosOsRegistros();

            req.resultados = listaEntidades;
            next();
        } catch (erro) {
            return res.status(500).send({ erro: erro.message });
        }
    }

    async pegaUmPorId(req, res) {
        const { id } = req.params;

        try {
            const umRegistro = await this.entidadeService.pegaUmRegistroPorId(id);

            return res.status(200).send(umRegistro);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }

    async pegaUm(req, res) {
        const where = req.params;
        try {
            const umRegistro = await this.entidadeService.pegaUm(where);

            return res.status(200).send(umRegistro);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }

    async criaNovo(req, res) {
        const dados = req.body;

        try {
            const novoRegistro = await this.entidadeService.criaNovoRegistro(dados);
            return res.status(201).send({ message: "Registro criado com sucesso!", novoRegistro});
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }

    async atualiza(req, res) {
        const where = req.params;
        const dadosAtualizados = req.body;
        try {
            const registroAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);

            return res.status(200).send({ message: "Registro atualizado com sucesso!", registroAtualizado});
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }
    
    async exclui(req, res) {
        const where = req.params;
        try {
            const registroExcluido = await this.entidadeService.excluiRegistro(where);

            return res.status(200).send({ message: "Registro excluído com sucesso!", registroExcluido});
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }
}

export default Controller;
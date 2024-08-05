class Controller {
    constructor (entidadeService) {
        this.entidadeService = entidadeService;
    }

    async pegaTodos (req, res) {
        try {
            const listaEntidades = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).send(listaEntidades);
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
            if (Object.keys(dadosAtualizados).length === 0) {
                return res.status(400).json({ message: "Nenhum dado fornecido pra atualização. Portanto, nada foi mudado." });
            }
            
            const registroAtual = await this.entidadeService.pegaUmRegistroPorId(where.id);            
            const dadosIguais = Object.keys(dadosAtualizados).every(
                (key) => dadosAtualizados[key] === registroAtual[key]
            );

            if(dadosIguais) {
                return res.status(400).json({ message: "Os dados fornecidos são iguais aos atuais. Nenhuma alteração foi feita." });
            }

            const registroAtualizado = await this.entidadeService.atualizaRegistro(dadosAtualizados, where);
            return res.status(200).send({ message: "Registro atualizado com sucesso!", registroAtualizado});
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }
    
    async exclui(req, res) {
        const where = req.params;

        try {
            const registroExistente = await this.entidadeService.pegaUmRegistroPorId(where.id);

            if(!registroExistente) {
                return res.status(404).json({ message: "Registro não encontrado. Nenhuma exclusão realizada." });
        }
            const registroExcluido = await this.entidadeService.excluiRegistro(where);
            return res.status(200).send({ message: "Registro excluído com sucesso!", registroExcluido});
        } catch (erro) {
            return res.status(500).json({ erro: erro.message});
        }
    }
}

export default Controller;
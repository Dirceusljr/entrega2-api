class Services {
    constructor(entidadeRepository) {
        this.entidadeRepository = entidadeRepository;
    }

    async pegaTodosOsRegistros() {
        const lista = await this.entidadeRepository.pegaTodosOsRegistros();
        
        if(!lista) {
            throw new Error('Nenhum registro encontrado');
        }
        return lista
    }

    async pegaUmRegistroPorId(id) {
        const registro = await this.entidadeRepository.pegaUmRegistroPorId(id);

        if(!registro) {
            throw new Error('Registro não encontrado');
        }
        return registro;
    }
    
    async pegaUm(where) {
        const registro = await this.entidadeRepository.pegaUm(where);
    
        if(!registro) {
            throw new Error('Registro não encontrado');
        }
        return registro;
    }

    async contaRegistros(options) {
        return await this.entidadeRepository.contaRegistros(options);
    };

    async criaNovoRegistro(dados) {
        return await this.entidadeRepository.criaNovoRegistro(dados);
    };

    async atualizaRegistro(dadosAtualizados, where) {
        const registroAtualizado = await this.entidadeRepository.atualizaRegistro(dadosAtualizados, where);
        
        if(!registroAtualizado) {
            throw new Error('Registro não encontrado');
        }
        return registroAtualizado;
    }
    
    async excluiRegistro(where) {
        const registroDeletado = await this.entidadeRepository.excluiRegistro(where);
    
        if(!registroDeletado) {
            throw new Error('Registro não encontrado');
        }
        return registroDeletado;
    }

}

export default Services;
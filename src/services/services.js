class Services {
    constructor(entidadeRepository) {
        this.entidadeRepository = entidadeRepository;
    }

    async pegaTodosOsRegistros() {
        const lista = await this.entidadeRepository.pegaTodosOsRegistros();
        return lista
    }

    async pegaUmRegistroPorId(id) {
        const registro = await this.entidadeRepository.pegaUmRegistroPorId(id);
        return registro;
    }
    
    async pegaUm(where) {
        const registro = await this.entidadeRepository.pegaUm(where);
        return registro;
    }

    async contaRegistros(options) {
        const numeroDeRegistros = await this.entidadeRepository.contaRegistros(options);
        return numeroDeRegistros
    };

    async criaNovoRegistro(dados) {
        const novoRegistro = await this.entidadeRepository.criaNovoRegistro(dados);
        return novoRegistro
    };

    async atualizaRegistro(dadosAtualizados, where) {
        const registroAtualizado = await this.entidadeRepository.atualizaRegistro(dadosAtualizados, where);
        return registroAtualizado;
    }
    
    async excluiRegistro(where) {
        const registroDeletado = await this.entidadeRepository.excluiRegistro(where);
        return registroDeletado;
    }

}

export default Services;
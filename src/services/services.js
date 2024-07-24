import prisma from "../../prisma/prismaClient.js";

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
    }

    async pegaTodosOsRegistros( where = {} ) {
        return await prisma[this.model].findMany({
            where: {
                ...where
            }
        });
    }

    async pegaUmRegistroPorId(id) {
        return await prisma[this.model].findUnique({
            where: {
                id
            }
        })
    }

    async pegaUm(where) {
        return await prisma[`${this.model}`].findMany({
           where: {
            ...where
           }
        });
    }

    async contaRegistros(options) {
        return await prisma[`${this.model}`].count({
            ...options
        });
    };

    async criaNovoRegistro(dados) {
        return await prisma[`${this.model}`].create({
            data:{
                ...dados
            }
        })
    };

    async atualizaRegistro(dadosAtualizados, where) {
        const registroAtualizado = await prisma[`${this.model}`].update({
            data: {
                ...dadosAtualizados
            },
            where: {
                ...where
            }
        });

        return registroAtualizado;
    }

    async excluiRegistro(where) {
        const registroExcluido = await prisma[`${this.model}`].delete({
            where: {
                ...where
            }
        });

        return registroExcluido;
    }

}

export default Services;
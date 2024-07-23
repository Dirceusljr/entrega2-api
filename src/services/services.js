import prisma from "../../prisma/prismaClient.js";

class Services {
    constructor(nomeDoModelo) {
        this.model = nomeDoModelo;
        console.log(this.model)
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
        console.log(where)
        return await prisma[`${this.model}`].findMany({
           where: {
            ...where
           }
        });
    }

    async criaNovoRegistro(dados) {
        return await prisma[`${this.model}`].create({
            data:{
                ...dados
            }
        })
    }
}

export default Services;
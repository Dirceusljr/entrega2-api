import Repository from "./repository.js";
import prisma from "../../prisma/prismaClient.js";

class UsuarioRepository extends Repository {
    constructor() {
        super('usuario');
    }

    async pegaTodosOsRegistros( where = {} ) {
        return await prisma['usuario'].findMany({
            where: {
                ...where
            },
            select: {
                id: true,
                nome: true,
                email: true,
                reputacao: true,
            }
        });
    }

    async pegaUmRegistroPorId(id) {
        return await prisma['usuario'].findUnique({
            where: {
                id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                reputacao: true,
            }
        })
    }

    async pegaUm(where) {
        return await prisma['usuario'].findMany({
           where: {
            ...where
           },
           select: {
               id: true,
               nome: true,
               email: true,
               reputacao: true,
           }
        });
    }

    async pegaUmCompleto(where) {
        return await prisma['usuario'].findMany({
           where: {
            ...where
           },
           select: {
               id: true,
               nome: true,
               email: true,
               reputacao: true,
               senha: true
           }
        });
    }

    async contaRegistros(options) {
        return await prisma['usuario'].count({
            ...options
        });
    };

    async criaNovoRegistro(dados) {
        return await prisma['usuario'].create({
            data:{
                ...dados
            },
            select: {
                id: true,
                nome: true,
                email: true,
                reputacao: true,
            }
        })
    };

    async atualizaRegistro(dadosAtualizados, where) {
        const registroAtualizado = await prisma['usuario'].update({
            data: {
                ...dadosAtualizados
            },
            where: {
                ...where
            },
            select: {
                id: true,
                nome: true,
                email: true,
                reputacao: true,
            }
        });

        return registroAtualizado;
    }

    async excluiRegistro(where) {
        const registroExcluido = await prisma['usuario'].delete({
            where: {
                ...where
            },
            select: {
                id: true,
                nome: true,
                email: true,
                reputacao: true,
            }
        });

        return registroExcluido;
    }
}

export default UsuarioRepository;
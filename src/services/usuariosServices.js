import { hash } from "bcrypt";
import prisma from "../../prisma/prismaClient.js";

class UsuariosServices {
    async cadastrarUsuario(dto) {

        const usuario = await prisma.usuario.findUnique({
            where: {
                email: dto.email
            }
        })

        if (usuario) {
            throw new Error('Usuário já cadastrado');
        }

        try {
            const senhaCriptografada = await hash(dto.senha, 8);
            const novoUsuario = await prisma.usuario.create({
                data: {
                    nome: dto.nome,
                    email: dto.email,
                    senha: senhaCriptografada
                }
            })

            return novoUsuario;
            
        } catch (erro) {
            throw new Error(erro.message);
        }
    }

    async buscarTodosOsUsuarios() {
        try {
            const listaUsuarios = await prisma.usuario.findMany();

            if(!listaUsuarios) {
                throw new Error('Nenhum usuário encontrado');
            }

            return listaUsuarios;
        } catch (erro) {
            throw new Error(erro.message)  
        }
    }

    async buscarUsuarioPorId(dto) {
        const { id } = dto;
    
        try {
            const usuario = await prisma.usuario.findUnique({
                where: {
                    id
                }
            })

            if(!usuario) {
                throw new Error('Usuário não encontrado');
            }

            return usuario;
        } catch (erro) {
            throw new Error(erro.message);
        }
    }

    async editarUsuario(dto) {
        const { id, nome, email, reputacao } = dto;

        try {
            const usuarioAtualizado = await prisma.usuario.update({
                where: {
                    id
                },
                data: {
                    nome,
                    email,
                    reputacao
                }
            })

            if(!usuarioAtualizado) {
                throw new Error('Usuário não encontrado');
            }

            return usuarioAtualizado;
        } catch (erro) {
            throw new Error(erro.message);
        }
    }

    async deletarUsuarioPorId(dto) {
        const { id } = dto;

        try {
            const usuarioDeletado = await prisma.usuario.delete({
                where: {
                    id
                },
                select: {
                    nome: true,
                    email: true
                }
            })
            
            return usuarioDeletado;
        } catch (erro) {
            throw new Error(erro.message);
        }
    }
}

export default UsuariosServices;
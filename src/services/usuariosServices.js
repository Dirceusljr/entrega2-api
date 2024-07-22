import { hash } from "bcrypt";
import prisma from "../../prisma/prismaClient.js";

class UsuariosServices {
    async criarNovo(dto) {

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
                    senha: dto.senha
                }
            })

            return novoUsuario;
            
        } catch (erro) {
            throw new Error('Erro ao cadastrar usuário.')
        }
    }
}

export default UsuariosServices;
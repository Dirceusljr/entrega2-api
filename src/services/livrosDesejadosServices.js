import prisma from "../../prisma/prismaClient.js"

class LivrosDesejadosServices {
    async cadastrarLivroDesejado(dto) {
        const { usuarioId, titulo, autor, linkCapa } =  dto;

        try {
            const novoLivroDesejado = await prisma.livroDesejado.create({
                data: {
                    usuarioId,
                    titulo,
                    autor,
                    linkCapa
                }
            })

            if(!novoLivroDesejado) {
                throw new Error('Erro ao cadastrar livro desejado.')
            }

            return novoLivroDesejado
        } catch (erro) {
            throw new Error("Houve algum erro no banco de dados.");
        }
    }

    async buscarTodosLivrosDesejados() {
        try {
            const listaLivrosDesejados = await prisma.livroDesejado.findMany()

            if(!listaLivrosDesejados) {
                throw new Error('Nenhum livro desejado encontrado.')
            }

            return listaLivrosDesejados            

        } catch (erro) {
            throw new Error(erro.message)  
        }
    }

    async buscarLivroDesejadoPorId(dto) {
        const { id } = dto;

        try {
            const livroDesejado = await prisma.livroDesejado.findUnique({
                where: {
                    id
                }
            })   
            
            if (!livroDesejado) {
                throw new Error('Nenhum livro desejado encontrado.')
            }
    
            return livroDesejado
        } catch (erro) {
            throw new Error(erro.message);
        }
    }

    async editarLivroDesejadoPorId(dto) {
        const { id, titulo, autor, linkCapa } = dto

        try {
            const livroDesejadoEditado = await prisma.livroDesejado.update({
                where: {
                    id
                },
                data: {
                    titulo,
                    autor,
                    linkCapa
                }
            })

            if(!livroDesejadoEditado) {
                throw new Error('Não foi possível editar o livro desejado.')
            }

            return livroDesejadoEditado
        } catch (erro) {
            throw new Error(erro.message);

        }
    }

    async deletarLivroDesejadoPorId(dto) {
        const { id } = dto;

        try {
            const livroDeletado = await prisma.livroDesejado.delete({
                where: {
                    id
                },
                select: {
                    titulo: true,
                    autor: true
                }
            })   
            
            if (!livroDeletado) {
                throw new Error('Nenhum livro desejado foi deletado.')
            }
    
            return livroDeletado
        } catch (erro) {
            throw new Error(erro.message);
        }
    }
}

export default LivrosDesejadosServices
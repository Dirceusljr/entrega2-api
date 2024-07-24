import prisma from "../../prisma/prismaClient.js";

class LivrosServices {
  async cadastrarLivro(dto) {
    const { titulo, autor, usuarioId, linkCapa, editora, genero, paginas } =
      dto;

    try {
      const novoLivro = await prisma.livro.create({
        data: {
          titulo,
          autor,
          usuarioId,
          linkCapa,
          editora,
          genero,
          paginas,
        },
      });

      if (!novoLivro) {
        throw new Error("Erro ao cadastrar livro.");
      }

      return novoLivro;
    } catch (erro) {
      throw new Error(erro.message);
    }
  }
  
  async buscarTodosOsLivros() {
    try {
        const listaLivros = await prisma.livro.findMany();

        if(!listaLivros) {
            throw new Error('Nenhum livro encontrado');
        }

        return listaLivros;
    } catch (erro) {
        throw new Error(erro.message);  
    }
}

async buscarLivroPorId(dto) {
    const { id } = dto;

    try {
        const livro = await prisma.livro.findUnique({
            where: {
                id
            }
        })

        if(!livro) {
            throw new Error('Livro não encontrado');
        }

        return livro;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async buscarLivrosPorUsuarioId(dto) {
    const { usuarioId } = dto;

    try {
        const listaLivros = await prisma.livro.findMany({
            where: {
                usuarioId
            }
        })

        if(!listaLivros) {
            throw new Error('Livros não encontrados.');
        }

        return listaLivros;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async editarLivro(dto) {
    const { id, titulo, autor, usuarioId, linkCapa, editora, genero, paginas, avaliacao, disponibilidade } =
    dto;
    try {
        const livroAtualizado = await prisma.livro.update({
            where: {
                id
            },
            data: {
                titulo,
                autor,
                usuarioId,
                linkCapa,
                editora,
                genero,
                paginas,
                avaliacao,
                disponibilidade
            }
        })

        if(!livroAtualizado) {
            throw new Error('Livro não encontrado');
        }

        return livroAtualizado;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async deletarLivro(dto) {
    const { id } = dto;

    try {
        const livroDeletado = await prisma.livro.delete({
            where: {
                id
            },
            select: {
                titulo: true,
                autor: true,
                usuarioId: true
            }
        })
        
        return livroDeletado;
    } catch (erro) {
        throw new Error(erro.message);
    }
}
}

export default LivrosServices;

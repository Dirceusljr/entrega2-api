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
      throw new Error("Houve algum erro no banco de dados.");
    }
  }
}

export default LivrosServices;

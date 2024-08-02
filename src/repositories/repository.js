import prisma from "../../prisma/prismaClient.js";

class Repository {
  constructor(nomeDoModelo) {
    this.model = nomeDoModelo;
  }

  async pegaTodosOsRegistros(where = {}) {
    try {
      return await prisma[`${this.model}`].findMany({
        where: {
          ...where,
        },
      });
    } catch (error) {
      throw new Error("Não foi possível encontrar registros");
    }
  }

  async pegaUmRegistroPorId(id) {
    try {
      return await prisma[`${this.model}`].findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error("Não foi possível encontrar o registro");
    }
  }

  async pegaUm(where) {
    try {
      return await prisma[`${this.model}`].findUnique({
        where: {
          ...where,
        },
      });
    } catch (error) {
      throw new Error("Não foi possível encontrar o registro");
    }
  }

  async contaRegistros(options) {
    try {
        return await prisma[`${this.model}`].count({
            ...options,
          });
    } catch (error) {
        throw new Error("Não foi possível encontrar registros");
    }
  }

  async criaNovoRegistro(dados) {
    try {
        return await prisma[`${this.model}`].create({
            data: {
              ...dados,
            },
          });
    } catch (error) {
        throw new Error("Não foi possível criar o registro");
    }
  }

  async atualizaRegistro(dadosAtualizados, where) {
    try {
      const registroAtualizado = await prisma[`${this.model}`].update({
        data: {
          ...dadosAtualizados,
        },
        where: {
          ...where,
        },
      });

      return registroAtualizado;
    } catch (error) {
      throw new Error("Não foi possível atualizar o registro");
    }
  }

  async excluiRegistro(where) {
    try {
      const registroExcluido = await prisma[`${this.model}`].delete({
        where: {
          ...where,
        },
      });

      return registroExcluido;
    } catch (error) {
      throw new Error("Não foi possível deletar o registro");
    }
  }
}

export default Repository;

import LivrosDesejadosServices from "../services/livrosDesejadosServices.js";

const livrosDesejadosServices = new LivrosDesejadosServices();

class LivrosDesejadosController {
  static async cadastrarLivroDesejado(req, res) {
    const { usuarioId, titulo, autor, linkCapa } = req.body;

    if (!usuarioId || !titulo || !autor) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    try {
      const novoLivroDesejado =
        await livrosDesejadosServices.cadastrarLivroDesejado({
          usuarioId,
          titulo,
          autor,
          linkCapa,
        });

      res
        .status(201)
        .send({ message: "Registro criado com sucesso", novoLivroDesejado });
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }

  static async buscarTodosLivrosDesejados(req, res) {
    try {
      const listaLivrosDesejados =
        await livrosDesejadosServices.buscarTodosLivrosDesejados();

      res.status(200).send(listaLivrosDesejados);
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }

  static async buscarLivroDesejadoPorId(req, res) {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id é obrigatório");
    }

    try {
      const livroDesejado =
        await livrosDesejadosServices.buscarLivroDesejadoPorId({ id });

      res.status(200).send(livroDesejado);
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }

  static async editarLivroDesejadoPorId(req, res) {
    const { id } = req.params;
    const { titulo, autor, linkCapa } = req.body;

    if (!id) {
        throw new Error('Id é obrigatório');
    }

    try {
        const livroDesejadoEditado = await livrosDesejadosServices.editarLivroDesejadoPorId({ id, titulo, autor, linkCapa })
        
        res.status(200).send(livroDesejadoEditado)
        
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }

  }

  static async deletarLivroDesejadoPorId(req, res) {
    const { id } = req.params;

    if (!id) {
      throw new Error("Id é obrigatório");
    }

    try {
      const livroDeletado =
        await livrosDesejadosServices.deletarLivroDesejadoPorId({ id });

      res.status(200).send({
        message: "Livro deletado com sucesso!",
        livroDeletado: livroDeletado,
      });
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }
}

export default LivrosDesejadosController;

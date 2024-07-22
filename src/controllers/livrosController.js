import LivrosServices from "../services/livrosServices.js";

const livrosServices = new LivrosServices();

class LivrosController {
  static async cadastrarLivro(req, res) {
    let { titulo, autor, usuarioId, linkCapa, editora, genero, paginas } =
      req.body;

    if (!titulo || !autor || !usuarioId) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    if (paginas) {
      paginas = parseInt(paginas);
    }

    try {
      const novoLivro = await livrosServices.cadastrarLivro({
        titulo,
        autor,
        usuarioId,
        linkCapa,
        editora,
        genero,
        paginas
      })

      res.status(201).send({message:'Registro criado com sucesso', novoLivro})
    } catch (erro) {
      throw new Error("Houve algum erro no banco de dados.");
    }
  }
}

export default LivrosController;

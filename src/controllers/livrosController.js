import Controller from "./controller.js";
import LivrosServices from "../services/livrosServices.js";
import UsuariosServices from "../services/usuariosServices.js";

const livrosServices = new LivrosServices();
const usuariosServices = new UsuariosServices();

class LivrosController extends Controller {
  constructor() {
    super(livrosServices);
  }

  async pegaLivrosPorUsuarioId(req, res) {
    const { usuarioId } = req.params;

    try {
      const listaLivros = await livrosServices.pegaLivrosPorUsuarioId(
        usuarioId
      );

      res.status(200).send(listaLivros);
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }

  async cadastraLivroParaUsuario(req, res) {
    const { usuarioId } = req.params;
    const { titulo, autor, linkCapa, editora, genero, paginas } = req.body;
    
    try {
      const livroExistente = await livrosServices.pegaLivrosPorUsuarioId(usuarioId);
      const livroDuplicado = livroExistente.find(livro => livro.titulo === titulo);

      if(livroDuplicado) {
          return res.status(400).send({ message: "Livro já cadastrado!" });
      }

      const novoLivro = await livrosServices.cadastraLivroParaUsuario({
        titulo,
        autor,
        usuarioId,
        linkCapa,
        editora,
        genero,
        paginas,
      });

      res
        .status(201)
        .send({ message: "Registro criado com sucesso", novoLivro });
    } catch (erro) {
      throw new Error("Houve algum erro no banco de dados.");
    }
  }

  async atualizaLivroDoUsuario(req, res) {
    const { usuarioId, id } = req.params;
    const {
      titulo,
      autor,
      linkCapa,
      editora,
      genero,
      paginas,
      avaliacao,
      disponibilidade,
    } = req.body;

    const dados = {
      titulo,
      autor,
      usuarioId,
      linkCapa,
      editora,
      genero,
      paginas,
      avaliacao,
      disponibilidade,
    };

    try {
      const registroAtual = await livrosServices.pegaLivrosPorUsuarioId(
        usuarioId, 
        titulo
    );

      if(registroAtual) {
        return res.status(409).json({ message: "O livro já existe para este usuário." });
    }

      const livroAtualizado = await livrosServices.atualizaLivroDoUsuario(
        dados,
        id
      );

      res.status(201).send(livroAtualizado);
    } catch (erro) {
      throw new Error("Houve algum erro no banco de dados.");
    }
  }

  async excluiLivroDoUsuario(req, res) {
    const { usuarioId, id } = req.params;

    try {
      const livroDeletado = await livrosServices.excluiLivroDoUsuario(usuarioId, id);

      res.status(200).send({
        message: "Livro deletado com sucesso!",
        livroDeletado: livroDeletado,
      });
    } catch (erro) {
      res.status(500).send({ erro: erro.message });
    }
  }
}

export default LivrosController;

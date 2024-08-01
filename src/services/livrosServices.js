import Services from "./services.js";
import UsuarioServices from "./usuariosServices.js";
import LivrosRepository from "../repositories/livrosRepository.js";

const livrosRepository = new LivrosRepository();
const usuariosServices = new UsuarioServices();

class LivrosServices extends Services {
  constructor() {
    super(livrosRepository);
  }

  async pegaLivrosPorUsuarioId(usuarioId) {

    const usuario = await usuariosServices.pegaUmRegistroPorId(usuarioId);

    if(!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    try {
      const listaLivros = await livrosRepository.pegaTodosOsRegistros({usuarioId});

      if (!listaLivros) {
        throw new Error("Livros não encontrados.");
      }

      return listaLivros;
    } catch (erro) {
      throw new Error(erro.message);
    }
  }

  async cadastraLivroParaUsuario(dados) {

    const usuario = await usuariosServices.pegaUmRegistroPorId(dados.usuarioId);

    if(!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    try {
        const novoLivro = await livrosRepository.criaNovoRegistro(dados);

        return novoLivro;
    } catch (error) {
        throw new Error(error.message);
    }
  }

  async atualizaLivroDoUsuario(dados, id) {

    const usuario = await usuariosServices.pegaUmRegistroPorId(dados.usuarioId);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    try {
      const livroAtualizado = await livrosRepository.atualizaRegistro(dados, {id});

      return livroAtualizado;
    } catch (erro) {
      throw new Error(erro.message);
    }
  }

  async excluiLivroDoUsuario(usuarioId, id) {
    const usuario = await usuariosServices.pegaUmRegistroPorId(usuarioId);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    try {
      const livroDeletado = await livrosRepository.excluiRegistro({id});

      return livroDeletado;
    } catch (erro) {
      throw new Error(erro.message);
    }
  }
}

export default LivrosServices;

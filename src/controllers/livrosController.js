import LivrosServices from "../services/livrosServices.js";
import UsuariosServices from "../services/usuariosServices.js";

const livrosServices = new LivrosServices();
const usuariosServices = new UsuariosServices();

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
      res.status(500).send({ erro: erro.message });
    }
  }

  static async buscarTodosOsLivros(req, res) {
    try {
        const listaLivros = await livrosServices.buscarTodosOsLivros();

        res.status(200).send(listaLivros);
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

static async buscarLivroPorId(req, res) {
    const { id } = req.params;

    if (!id) {
        throw new Error('Id é obrigatório');
    }

    try {
        const livro = await livrosServices.buscarLivroPorId({ id });

        res.status(200).send(livro);
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

static async editarLivro(req, res) {
    const { id } = req.params;
    let { titulo, autor, usuarioId, linkCapa, editora, genero, paginas, avaliacao, disponibilidade } =
    req.body;

    if (!id) {
        throw new Error('Id é obrigatório');
    }

    if (paginas) {
        paginas = parseInt(paginas);
    }


    try {
        const livroAtualizado = await livrosServices.editarLivro({ id, titulo, autor, usuarioId, linkCapa, editora, genero, paginas, avaliacao, disponibilidade });

        res.status(200).send(livroAtualizado);
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

static async deletarLivro(req, res) {
    const { id } = req.params;

    if (!id) {
        throw new Error('Id é obrigatório');
    }

    try {
        const livroDeletado = await livrosServices.deletarLivro({ id });

        res.status(200).send({
            message: "Livro deletado com sucesso!",
            livroDeletado: livroDeletado
        })
        
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

static async buscarLivrosPorUsuarioId(req, res) {
    const { usuarioId } = req.params;

    if (!usuarioId) {
        throw new Error('Id do usuário é obrigatório');
    }

    try {
        const listaLivros = await livrosServices.buscarLivrosPorUsuarioId({ usuarioId });

        res.status(200).send(listaLivros);
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

static async cadastrarLivroParaUsuario(req, res) {
    const { usuarioId } = req.params;
    let { titulo, autor, linkCapa, editora, genero, paginas } =
      req.body;

    if (!titulo || !autor || !usuarioId) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    const usuario = await usuariosServices.buscarUsuarioPorId({ id: usuarioId });

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
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

  static async editarLivroDoUsuario(req, res) {
    const { usuarioId, id } = req.params;
    let { titulo, autor, linkCapa, editora, genero, paginas, avaliacao, disponibilidade } =
      req.body;

      console.log()

    if (!id || !usuarioId) {
      throw new Error("Campos obrigatórios não preenchidos.");
    }

    const usuario = await usuariosServices.buscarUsuarioPorId({ id: usuarioId });

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    if (paginas) {
      paginas = parseInt(paginas);
    }

    try {
      const livroAtualizado = await livrosServices.editarLivro({
        id,
        titulo,
        autor,
        usuarioId,
        linkCapa,
        editora,
        genero,
        paginas,
        avaliacao, 
        disponibilidade
      })

      res.status(201).send(livroAtualizado)
    } catch (erro) {
      throw new Error("Houve algum erro no banco de dados.");
    }
  }

  static async deletarLivroDoUsuario(req, res) {
    const { usuarioId, id } = req.params;

    if (!id || !usuarioId) {
        throw new Error("Campos obrigatórios não preenchidos.");
      }
  
      const usuario = await usuariosServices.buscarUsuarioPorId({ id: usuarioId });
  
      if (!usuario) {
        throw new Error("Usuário não encontrado.");
      }

      try {
        const livroDeletado = await livrosServices.deletarLivro({ id });

        res.status(200).send({
            message: "Livro deletado com sucesso!",
            livroDeletado: livroDeletado
        })
        
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
  }
}

export default LivrosController;

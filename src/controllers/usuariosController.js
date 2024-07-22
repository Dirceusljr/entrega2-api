import UsuariosServices from "../services/usuariosServices.js";

const usuariosServices = new UsuariosServices();

class UsuariosController {
    static async cadastrarUsuario(req, res) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            throw new Error('Nome, email e senha são obrigatórios');
        }

        try {
            const novoUsuario = await usuariosServices.cadastrarUsuario({nome, email, senha});

            res.status(201).send({message:'Registro criado com sucesso', novoUsuario})
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }

    static async buscarTodosOsUsuarios(req, res) {
        try {
            const listaUsuarios = await usuariosServices.buscarTodosOsUsuarios();

            res.status(200).send(listaUsuarios);
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }

    static async buscarUsuarioPorId(req, res) {
        const { id } = req.params;

        if (!id) {
            throw new Error('Id é obrigatório');
        }

        try {
            const usuario = await usuariosServices.buscarUsuarioPorId({ id });

            res.status(200).send(usuario);
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }

    static async editarUsuario(req, res) {
        const { id } = req.params;
        const { nome, email, reputacao } = req.body;

        if (!id) {
            throw new Error('Id é obrigatório');
        }

        try {
            const usuarioAtualizado = await usuariosServices.editarUsuario({ id, nome, email, reputacao });

            res.status(200).send(usuarioAtualizado);
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }

    static async deletarUsuarioPorId(req, res) {
        const { id } = req.params;

        if (!id) {
            throw new Error('Id é obrigatório');
        }

        try {
            const usuarioDeletado = await usuariosServices.deletarUsuarioPorId({ id });

            res.status(200).send({
                message: "Usuário deletado com sucesso!",
                usuarioDeletado
            })
            
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }
}

export default UsuariosController;
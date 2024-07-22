import UsuariosServices from "../services/usuariosServices.js";

const usuariosServices = new UsuariosServices();

class UsuariosController {
    static async criarNovo(req, res) {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            throw new Error('Nome, email e senha são obrigatórios');
        }

        try {
            const novoUsuario = await usuariosServices.criarNovo({nome, email, senha});

            res.status(201).send({message:'Registro criado com sucesso', novoUsuario})
        } catch (erro) {
            res.status(500).send({ erro: erro.message });
        }
    }
}

export default UsuariosController;
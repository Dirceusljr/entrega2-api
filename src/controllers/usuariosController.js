import UsuariosServices from "../services/usuariosServices.js";

const usuariosServices = new UsuariosServices();

class UsuariosController {
    static async teste(req, res) {
        const retorno = usuariosServices.testeServices();

        res.send({message: retorno});
    }
}

export default UsuariosController;
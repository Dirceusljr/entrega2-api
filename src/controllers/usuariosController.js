import UsuarioServices from "../services/usuariosServices.js";
import Controller from "./controller.js";


const usuariosServices = new UsuarioServices();

class UsuarioController extends Controller {
    constructor () {
        super(usuariosServices);
    }
}

export default UsuarioController;
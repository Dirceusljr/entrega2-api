import UsuarioPermissoesServices from "../services/usuarioPermissoesServices.js";
import Controller from "./controller.js";


const usuarioPermissoesServices = new UsuarioPermissoesServices();

class UsuarioPermissoesController extends Controller {
    constructor () {
        super(usuarioPermissoesServices);
    }
}

export default UsuarioPermissoesController;
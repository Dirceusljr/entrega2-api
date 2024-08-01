import UsuarioCargosServices from "../services/usuarioCargosServices.js";
import Controller from "./controller.js";


const usuarioCargosServices = new UsuarioCargosServices();

class UsuarioCargosController extends Controller {
    constructor () {
        super(usuarioCargosServices);
    }
}

export default UsuarioCargosController;
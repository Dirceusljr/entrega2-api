import PermissoesServices from "../services/permissoesServices.js";
import Controller from "./controller.js";


const permissoesServices = new PermissoesServices();

class PermissoesController extends Controller {
    constructor () {
        super(permissoesServices);
    }
}

export default PermissoesController;
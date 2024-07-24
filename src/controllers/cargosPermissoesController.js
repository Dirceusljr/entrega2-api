import CargosPermissoesServices from "../services/cargosPermissoesServices.js";
import Controller from "./controller.js";


const cargosPermissoesServices = new CargosPermissoesServices();

class CargosPermissoesController extends Controller {
    constructor () {
        super(cargosPermissoesServices);
    }
}

export default CargosPermissoesController;
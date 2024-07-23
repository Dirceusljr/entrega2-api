import CargosServices from "../services/cargosServices.js";
import Controller from "./controller.js";


const cargosServices = new CargosServices();

class CargosController extends Controller {
    constructor () {
        super(cargosServices);
    }
}

export default CargosController;
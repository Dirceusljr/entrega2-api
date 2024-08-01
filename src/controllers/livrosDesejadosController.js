import Controller from "./controller.js";
import LivrosDesejadosServices from "../services/livrosDesejadosServices.js";

const livrosDesejadosServices = new LivrosDesejadosServices();

class LivrosDesejadosController extends Controller {
    constructor () {
        super(livrosDesejadosServices);
    }
}

export default LivrosDesejadosController;

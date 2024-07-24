import TrocaPedidosServices from "../services/trocaPedidosServices.js";
import Controller from "./controller.js";


const trocaPedidosServices = new TrocaPedidosServices();

class TrocaPedidosController extends Controller {
    constructor () {
        super(trocaPedidosServices);
    }
}

export default TrocaPedidosController;
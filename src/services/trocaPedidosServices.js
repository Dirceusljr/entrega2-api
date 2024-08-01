import TrocaPedidosRepository from "../repositories/trocaPedidosRepository.js";
import Services from "./services.js";

const trocaPedidosRepository = new TrocaPedidosRepository();

class TrocaPedidosServices extends Services {
    constructor() {
        super(trocaPedidosRepository);
    }
}

export default TrocaPedidosServices;
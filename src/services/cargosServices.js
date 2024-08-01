import CargosRepository from "../repositories/cargosRepository.js";
import Services from "./services.js";

const cargosRepository = new CargosRepository();

class CargosServices extends Services {
    constructor() {
        super(cargosRepository);
    }
}

export default CargosServices;
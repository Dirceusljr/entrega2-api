import Services from "./services.js";
import LivrosDesejadosRepository from "../repositories/livrosDesejadosRepository.js";

const livrosDesejadosRepository = new LivrosDesejadosRepository();

class LivrosDesejadosServices extends Services {
    constructor() {
        super(livrosDesejadosRepository);
    }
}

export default LivrosDesejadosServices
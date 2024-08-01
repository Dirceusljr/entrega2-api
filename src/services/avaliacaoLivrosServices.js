import AvaliacaoLivrosRepository from "../repositories/avaliacaoLivrosRepository.js";
import Services from "./services.js";

const avaliacaoLivrosRepository = new AvaliacaoLivrosRepository();

class AvaliacaoLivrosServices extends Services {
    constructor() {
        super(avaliacaoLivrosRepository);
    }

}

export default AvaliacaoLivrosServices;
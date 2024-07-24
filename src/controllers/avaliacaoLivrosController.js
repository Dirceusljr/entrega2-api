import AvaliacaoLivrosServices from "../services/avaliacaoLivrosServices.js";
import Controller from "./controller.js";

const avaliacaoLivrosServices = new AvaliacaoLivrosServices();


class AvaliacaoLivrosController extends Controller {
    constructor () {
        super(avaliacaoLivrosServices);
    }
}

export default AvaliacaoLivrosController;
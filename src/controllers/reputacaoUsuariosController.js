import ReputacaoUsuariosServices from "../services/reputacaoUsuariosServices.js";
import Controller from "./controller.js";


const reputacaoUsuariosServices = new ReputacaoUsuariosServices();

class ReputacaoUsuariosController extends Controller {
    constructor () {
        super(reputacaoUsuariosServices);
    }
}

export default ReputacaoUsuariosController;
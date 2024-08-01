import ReputacaoUsuariosRepository from "../repositories/reputacaoUsuariosRepository.js";
import Services from "./services.js";

const reputacaoUsuariosRepository = new ReputacaoUsuariosRepository();


class ReputacaoUsuariosServices extends Services {
    constructor() {
        super(reputacaoUsuariosRepository);
    }
}

export default ReputacaoUsuariosServices;
import Services from "./services.js";
import UsuariosCargosRepository from "../repositories/usuariosCargosRepository.js";

const usuariosCargosRepository = new UsuariosCargosRepository();

class UsuarioCargosServices extends Services {
    constructor() {
        super(usuariosCargosRepository);
    }
}

export default UsuarioCargosServices;
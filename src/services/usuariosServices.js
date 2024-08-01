import { hash } from "bcrypt";
import Services from "./services.js";
import UsuarioRepository from "../repositories/usuariosRepository.js";

const usuarioRepository = new UsuarioRepository();

class UsuarioServices extends Services {
  constructor() {
    super(usuarioRepository);
  }

async criaNovoRegistro(dados) {
    const usuario = await usuarioRepository.pegaUm({
        email: dados.email,
    });

    if (usuario.length > 0) {
        throw new Error("Usuário já cadastrado");
    }

    try {
        const senhaCriptografada = await hash(dados.senha, 8);
        const novoUsuario = await usuarioRepository.criaNovoRegistro({
            ...dados,
            senha: senhaCriptografada,
        });
        return novoUsuario;
    } catch (erro) {
        throw new Error(erro.message);
    }
}
}

export default UsuarioServices;

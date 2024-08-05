import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import UsuarioRepository from "../repositories/usuariosRepository.js";

const { sign } = jwt;

const usuarioRepository = new UsuarioRepository();

class AuthServices {
  async login(dto) {
    const jsonSecret = process.env.JSON_SECRET;

    const usuario = await usuarioRepository.pegaUmCompleto({
      email: dto.email
    })

    if (!usuario || usuario.length === 0) {
      throw new Error("Usuário não cadastrado.");
    }

    const senhasIguais = await compare(dto.senha, usuario[0].senha);

    if (!senhasIguais) {
      throw new Error("Usuário ou senha inválido.");
    }

    const accessToken = sign(
      {
        id: usuario[0].id,
        email: usuario[0].email,
      },
      jsonSecret,
      {
        expiresIn: "1d"
      }
    );

    return {
      accessToken,
    };
  }
}

export default AuthServices;

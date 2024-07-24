import { compare } from "bcrypt";
import prisma from "../../prisma/prismaClient.js";
import jwt from "jsonwebtoken";

const { sign } = jwt;

class AuthServices {
  async login(dto) {
    const jsonSecret = process.env.JSON_SECRET;

    const usuario = await prisma.usuario.findUnique({
      where: {
        email: dto.email,
      },
      select: {
        id: true,
        email: true,
        senha: true,
      },
    });

    if (!usuario) {
      throw new Error("Usuário não cadastrado.");
    }

    const senhasIguais = await compare(dto.senha, usuario.senha);

    if (!senhasIguais) {
      throw new Error("Usuário ou senha inválido.");
    }

    const accessToken = sign(
      {
        id: usuario.id,
        email: usuario.email,
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

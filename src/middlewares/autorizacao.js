import jwt from 'jsonwebtoken';
import prisma from '../../prisma/prismaClient.js';
const { verify } = jwt;

const autorizacao = (listaDeCargos = []) => {

  return async (req, res, next) => {
    const token = req.headers.authorization;
    const jsonSecret = process.env.JSON_SECRET;

    const id = req.usuarioId;

    const usuario = await prisma.usuario.findUnique({
      where: {
        id
      },
      include: {
        usuariosCargos: {
          include: {
            cargo: {
              select: {
                nome: true
              }
            }
          }          
        }
      }
    })

    if(!usuario) {
      return res.status(401).send('Usuário não cadastrado.')
  }

  if(!usuario.usuariosCargos[0]) {
    return res.status(401).send('Usuário não possui cargo cadastrado.')
  }

  const cargosCadastrado = usuario.usuariosCargos[0].cargo.nome

  

    if(!listaDeCargos.includes(cargosCadastrado)) {
      return res.status(401).send('Usuário não possui acesso a essa rota.')
    }
      next();
    }};

export default autorizacao;

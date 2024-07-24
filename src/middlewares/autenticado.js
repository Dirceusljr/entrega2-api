import jwt from "jsonwebtoken";

const { decode, verify } = jwt;
 
const autenticado = async (req, res, next) => {
    const token = req.headers.authorization;
    const jsonSecret = process.env.JSON_SECRET;


    if(!token) {
        return res.status(401).send({ message: "Token não informado." });
    }

    const [, accessToken] = token.split(" ");

    try {
        verify(accessToken, jsonSecret);

        const { id, email } = await decode(accessToken);

        req.usuarioId = id;
        req.usuarioEmail = email;

        return next();

    } catch (error) {
        return res.status(401).send("Usuário não autenticado.");
    }
}

export default autenticado;
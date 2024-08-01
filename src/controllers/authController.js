import AuthServices from "../services/authServices.js";

const authServices = new AuthServices();

class AuthController {
    static async login(req, res) {
        const { email, senha } = req.body;

        try {
            const login = await authServices.login({ email, senha });

            res.status(200).send(login);
        } catch (erro) {
            res.status(401).send({ message: erro.message })
        }
    }
}

export default AuthController;
import User from "../models/User.js";

const genRes = {
    response: [],
    success: true,
    error: null
}

const userController = {
    signUp: async (req, res, next) => {
        try {
            const response = await User.create(req.body)
            genRes.response = response
            res.status(201).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    signIn: async (req, res, next) => {
        genRes.response = "crear funcion para loguear"
        res.json(genRes)
    }
}

export default userController
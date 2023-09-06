import User from "../models/User.js";
import bcryptjs from 'bcryptjs'

const genRes = {
    response: [],
    success: true,
    error: null
}

const userController = {
    signUp: async (req, res, next) => {
        const passHash = bcryptjs.hashSync(req.body.password)
        const auxData = {...req.body, password:passHash}
        delete auxData?.verify
        delete auxData?.role
        try {
            const response = await User.create(auxData)
            genRes.response = "User acount created successfully!"
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
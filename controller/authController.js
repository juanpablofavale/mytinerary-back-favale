import User from "../models/User.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const initResponse = () => {
    return {
        response: [],
        success: true,
        error: null
    }
}

const userController = {
    signUp: async (req, res, next) => {
        const genRes = initResponse()
        const passHash = bcryptjs.hashSync(req.body.password, 10)
        const auxData = {...req.body, password:passHash}
        if(!auxData.image) delete auxData.image
        try {
            const response = await User.create(auxData)
            genRes.response = "User acount created successfully!"
            res.status(201).json(genRes)
        } catch (error) {
            next(error)
        }
    },
    signIn: async (req, res, next) => {
        const genRes = initResponse()
        try {
            const user = await User.findByIdAndUpdate(req.user._id, {loggedIn:true}, {new:true})
            let userAux = {email:req.user.email, name: req.user.name, lastName: req.user.lastName, role:req.user.role, verified:req.user.verified, image:req.user.image}
            const token = jwt.sign(userAux, process.env.SECRETKEY)
            genRes.token = token
            genRes.response = userAux
        } catch (error) {
            next(error)
        }
        res.json(genRes)
    },
    signOut: async (req, res, next) => {
        const genRes = initResponse()
        try {
            await User.findByIdAndUpdate(req.user._id, {loggedIn:false})
            genRes.response = "User logged out"
            res.json(genRes)
        } catch (error) {
            next(error)
        }
    }
}

export default userController
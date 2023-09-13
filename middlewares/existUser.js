import User from "../models/User.js"

const initResponse = () => {
    return {
        details: [],
        success: false,
        error: true
    }
}

export default async (req, res, next) => {
    try {
        const response = await User.findOne({email: req.body.email})
        if (!response){
            return next()
        }
        const genRes = initResponse()
        genRes.details = ["Error create account. User already exists!"]
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
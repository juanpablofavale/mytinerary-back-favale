import User from "../models/User.js"

const genRes = {
    col:{
        count:0,
    },
    response: [],
    success: true,
    error: null
}

const existUser = async (req, res, next) => {
    try {
        const response = await User.findOne({email: req.body.email})
        if (!response){
            return next()
        }
        genRes.response = "Error create account. User already exists!"
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}

export default existUser
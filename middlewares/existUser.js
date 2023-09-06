import User from "../models/User.js"

const genRes = {
    response:"",
    success:true,
    error:false
}

export default async (req, res, next) => {
    try {
        const response = await User.findOne({email: req.body.email})
        if (!response){
            return next()
        }
        genRes.response = "Error create account. User already exists!"
        genRes.error=true
        genRes.success=false
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
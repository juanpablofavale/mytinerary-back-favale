import User from "../models/User.js";

const genRes = {
    response:"",
    success:true,
    error:false
}

export default async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if (user) {
            req.user = user
            return next()
        }
        genRes.response = "Error user not found!"
        genRes.error=true
        genRes.success=false
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
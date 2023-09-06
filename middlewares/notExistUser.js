import User from "../models/User.js";

const initResponse = () => {
    return {
        response:"",
        success:true,
        error:false
    }
}

export default async (req, res, next) => {
    const genRes = initResponse()
    try {
        const email = req.body.email || req.user.email
        const user = await User.findOne({email: email})
        if (user) {
            req.user = user
            return next()
        }
        genRes.response = "User not found!"
        genRes.error=true
        genRes.success=false
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
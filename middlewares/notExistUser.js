import User from "../models/User.js";

const initResponse = () => {
    return {
        details:[],
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
        genRes.details = [{message:"Wrong Email or Password", success: false , error: true}]
        genRes.error=true
        genRes.success=false
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
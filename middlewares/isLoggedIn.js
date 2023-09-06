import User from "../models/User.js"

const initResponse = () => {
    return {
        response:[],
        success: true,
        error: false
    }
}

export default async (req, res, next) => {
    const genRes = initResponse()
    try {
        const user = await User.findById(req.user._id)
        if(user.loggedIn){
            return next()
        }
        genRes.response = "User is not logged in!"
        genRes.error=true
        genRes.success=false
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
import User from "../models/User.js"

const initResponse = () => {
    return {
        details: [],
        success: false,
        error: true
    }
}

export default async (req, res, next) => {
    const genRes = initResponse()
    try {
        const user = await User.findById(req.user._id)
        if(user.loggedIn){
            return next()
        }
        genRes.details = [{message:"User is not logged in!"}]
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
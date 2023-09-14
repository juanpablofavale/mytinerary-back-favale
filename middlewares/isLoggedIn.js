import User from "../models/User.js"

export default async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if(user.loggedIn){
            return next()
        }
        throw new Error("User is not logged in!")
    } catch (error) {
        next(error)
    }
}
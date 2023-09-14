import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const email = req.body.email || req.user.email
        const user = await User.findOne({email: email})
        if (user) {
            req.user = user
            return next()
        }
        throw new Error("Wrong Email or Password")
    } catch (error) {
        next(error)
    }
}
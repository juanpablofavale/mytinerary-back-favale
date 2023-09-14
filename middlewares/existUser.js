import User from "../models/User.js"

export default async (req, res, next) => {
    try {
        const response = await User.findOne({email: req.body.email})
        if (!response){
            return next()
        }
        throw new Error("Error create account. User already exists!")
    } catch (error) {
        next(error)
    }
}
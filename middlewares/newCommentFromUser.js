import Comment from "../models/Comment.js"

export default (req, res, next) => {
    try {
        if (String(req.body.user_id) == String(req.user._id)){
            return next()
        }
        throw new Error("User permissions error!")
    } catch (error) {
        next(error)
    }
}
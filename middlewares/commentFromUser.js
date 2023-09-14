import Comment from "../models/Comment.js"

export default async (req, res, next) => {
    try {
        const com = await Comment.findById(req.params.id)
        if (!com){
            throw new Error("Error. The comment does not exist!")
        }else if (String(com.user_id) == String(req.user._id) || req.user.role=="admin"){
            return next()
        } 
        throw new Error("Error. The comment is not from this user!")
    } catch (error) {
        next(error)
    }
}
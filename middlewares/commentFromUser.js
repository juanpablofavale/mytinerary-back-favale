import Comment from "../models/Comment.js"

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
        const com = await Comment.findById(req.params.id)
        if (!com){
            genRes.details = ["Error. The comment does not exist!"]
            return res.status(400).json(genRes)
        }else if (String(com.user_id) == String(req.user._id) || req.user.role=="admin"){
            return next()
        } 
        genRes.details = ["Error. The comment is not from this user!"]
        res.status(400).json(genRes)
    } catch (error) {
        console.log("error")
        next(error)
    }
}
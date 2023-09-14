import Comment from "../models/Comment.js"

const initResponse = () => {
    return {
        details: [],
        success: false,
        error: true
    }
}

export default (req, res, next) => {
    const genRes = initResponse()
    try {
        if (String(req.body.user_id) == String(req.user._id)){
            return next()
        }
        genRes.details = [{message:"User permissions error!"}]
        res.status(400).json(genRes)
    } catch (error) {
        next(error)
    }
}
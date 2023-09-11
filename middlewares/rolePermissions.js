const initResponse = () => {
    return {
        details: [],
        success: false,
        error: true
    }
}

export default (req, res, next) => {
    const genRes = initResponse()

    if (req.user.role == "admin" || req.user.role == "guide"){
        return next()
    }

    genRes.details = ["Permissions error!"]
    res.status(400).json(genRes)
}
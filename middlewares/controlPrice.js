const genRes = {
    col:{
        count:0,
    },
    response: [],
    success: true,
    error: null
}

const controlPrice = (req, res, next) => {
    if(req.body.price < 1 || req.body.price > 5){
        genRes.error="Price value error. Must be between 0 and 5"
        genRes.success=false
        return res.status(400).json(genRes)
    }
    next()
}

export default controlPrice
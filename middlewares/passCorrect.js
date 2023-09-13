import bcryptjs from 'bcryptjs'

const initResponse = () => {
    return {
        details: [],
        success: false,
        error: true
    }
}

export default (req, res, next) => {
    const login = bcryptjs.compareSync(req.body.password, req.user.password)
    if(login){
        return next()
    }
    const genRes = initResponse()
    genRes.details = ["Wrong Email or Password"]
    res.status(400).json(genRes)
}
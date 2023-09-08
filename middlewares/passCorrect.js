import bcryptjs from 'bcryptjs'

const initResponse = () => {
    return {
        details:[],
        success:true,
        error:false
    }
}

export default (req, res, next) => {
    const login = bcryptjs.compareSync(req.body.password, req.user.password)
    if(login){
        return next()
    }
    const genRes = initResponse()
    genRes.details = [{message:"Wrong Email or Password", success: false , error: true}]
    res.status(400).json(genRes)
}
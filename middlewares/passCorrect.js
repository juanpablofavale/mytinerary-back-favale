import bcryptjs from 'bcryptjs'

export default (req, res, next) => {
    const login = bcryptjs.compareSync(req.body.password, req.user.password)
    if(login){
        return next()
    }
    res.status(400).json({response:"Wrong Email or Password", success: false , error: true})
}
import bcryptjs from 'bcryptjs'

export default (req, res, next) => {
    const login = bcryptjs.compareSync(req.body.password, req.user.password)
    if(login){
        return next()
    }
    throw new Error("Wrong Email or Password 1")
}
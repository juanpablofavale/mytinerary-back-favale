export default (req, res, next) => {
    if (req.user.role == "admin" || req.user.role == "guide"){
        return next()
    }

    throw new Error("Permissions error!")
}
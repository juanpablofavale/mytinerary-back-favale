const validator = (schema) => (req, res, next) => {
    const validation = schema.validate(req.body, {abortEarly:false})
    if (validation.error){
        return next(validation.error)
    }
    return next()
}

export default validator
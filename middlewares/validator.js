const validator = (schema) => (req, res, next) => {
    const validation = schema.validate(req.body, {abortEarly:false})
    if (validation.error){
        return res.status(400).json(validation.error)
    }
    return next()
}

export default validator
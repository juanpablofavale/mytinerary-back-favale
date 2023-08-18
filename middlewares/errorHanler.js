const errorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    
    res.status(status).json({
        success: false,
        status,
        error: err.message
    })
}

export default errorHandler
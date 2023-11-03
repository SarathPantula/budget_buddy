module.exports = (err, _req, res, _next) => {
    console.error(err.stack);
    
    // Set a default status code if none is provided
    const statusCode = err.statusCode || 500;
    const message = `${err.message}` || `Internal Server Error`;

    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message
    });
};
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next();
        // const err = new Error('No authentication token provided.');
        // err.statusCode = 401; // Unauthorized status code
        // return next(err);
    }

    // For this example, I'm assuming a simple "Bearer token" logic.
    // In a real-world scenario, you'd verify this token.
    const token = authHeader.split(' ')[1];
    if (!token || token !== 'YOUR_SECRET_TOKEN') {
        const err = new Error('Invalid authentication token.');
        err.statusCode = 403; // Forbidden status code
        return next(err);
    }

    // If the token is valid, continue to the next middleware or route handler.
    next();
};
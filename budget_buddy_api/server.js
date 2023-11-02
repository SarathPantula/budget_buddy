const express = require('express');
const sequelize = require('./config/database');
const middlewares = require('./middleware');
const avatarTypeRoutes = require('./routes/avatarTypeRoutes');

const app = express();

// Middleware configurations
middlewares.bodyParser(app);

// Routes
app.use('/api/avatar-types', avatarTypeRoutes);

// Error handling middleware
middlewares.errorHandler(app);

// Database connection and server start
sequelize.sync()
    .then(result => {
        app.listen(3000);
        console.log('Server started on port 3000');
    })
    .catch(err => {
        console.error(err)
    });
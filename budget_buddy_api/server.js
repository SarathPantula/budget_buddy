const express = require('express');
const sequelize = require('./config/dbConfig');
const middlewares = require('./middleware');
const router = require('./routes');

const app = express();

// Middleware configurations
middlewares(app);

// Routes
app.use('/api', router);

// Database connection and server start
sequelize.sync({ force: false })
    .then(result => {
        app.listen(3000);
        console.log('Server started on port 3000');
    })
    .catch(err => {
        console.error(err)
    });
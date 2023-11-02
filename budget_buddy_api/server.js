const express = require('express');
const sequelize = require('./config/dbConfig');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const middlewares = require('./middleware');
const avatarTypeRoutes = require('./routes/avatarTypeRoutes');
const userRoutes = require('./routes/userRoutes');
const avatarRoutes = require('./routes/avatarRoutes');
const currencyCodeRoutes = require('./routes/currencyCodeRoutes');

const app = express();

// Middleware configurations
middlewares.bodyParser(app);

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Budget Buddy API',
            description: 'Budget Buddy API Information',
            version: '1.0.0',
            contact: {
                name: 'Sarath Pantula'
            },
            servers: ['http://localhost:3000']
        }
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server'
        }
    ],
    // Path to the API docs
    apis: ['./routes/*.js']
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/avatar-types', avatarTypeRoutes);

// Error handling middleware
middlewares.errorHandler(app);

// Database connection and server start
sequelize.sync({ force: false })
    .then(result => {
        app.listen(3000);
        console.log('Server started on port 3000');
    })
    .catch(err => {
        console.error(err)
    });
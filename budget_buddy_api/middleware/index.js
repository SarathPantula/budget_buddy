const bodyParser = require('./bodyParser');
const errorHandler = require('./errorHandler');
const auth = require('./auth');
const swagger = require('./swagger');

module.exports = (app) => {
    bodyParser(app);
    app.use(auth);
    swagger(app);
    app.use(errorHandler);
};
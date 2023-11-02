module.exports = (app) => {
    app.use(function (err, req, res, next) {
        res.status(404).json(err).send('Sorry, we cannot find that!');
    });
};
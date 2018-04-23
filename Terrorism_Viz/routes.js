var dbHelper = require('./dbHelper');
module.exports = function (app) {
    app.get('/recordsByYear', function (req, res) {
        if (req.query.year) {
            dbHelper.selectRecordsByYear(req.query.year, function (result) {
                console.log(result.length);
                res.send(result);
            });
        }
        else {
            res.status(400).send("Required parameter: videoId");
        }

    });
};
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "129.157.177.90",
    user: "root",
    password: "@Xuan2016",
    database: "mydb"
});

exports.selectRecordsByYear = function (year, fn) {

    con.query("SELECT * FROM records WHERE year=" + year.toString(), function (err, result, fields) {
        if (err) throw err;
        fn(JSON.parse(JSON.stringify(result)));
    });

};

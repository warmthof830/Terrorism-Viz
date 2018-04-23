var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "129.157.177.90",
    user: "root",
    password: "@Lin2016"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/database',function(req, res, next){
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        res.send("Connected!");
    });
});

module.exports = router;

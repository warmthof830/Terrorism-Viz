var fs = require("fs");
var csv = require("fast-csv");
var stream = fs.createReadStream("short.csv");

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "129.157.177.90",
    user: "root",
    password: "@Lin2016",
    database: "mydb"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var i=0;
    var csvStream = csv()
        .on("data", function(data){
            var sql = "INSERT INTO records (year, lat, lng) VALUES ('"+data[0]+"', '"+data[1]+"','"+data[2]+"');";
            if(i>0 && data[0]!='' && data[1]!='' && data[2]!=''){
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    //console.log("1 record inserted");
                });
            }
            //if(i<20) console.log(data);
            i++;
            if(i%1000 == 0)
                console.log(i);

        })
        .on("end", function(){
            console.log("done");
        });
    stream.pipe(csvStream);

});

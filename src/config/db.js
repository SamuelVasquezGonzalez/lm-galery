const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b15fdde8cdd234",
    password: "a3d22e36",
    database: "heroku_345c3c0a6fa9270"
});


module.exports = mysqlConnection;
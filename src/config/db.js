const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    host: "us-cdbr-east-06.cleardb.net",
    user: "b1460d0f2915d5",
    password: "eee7d203",
    database: "heroku_9927ee5ffe70db5",
    waitForConnections: true
})
module.exports = mysqlConnection;
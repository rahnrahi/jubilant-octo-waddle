var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'knowledge'
});

connection.connect(function(err) {
    if (err) throw err;
    else{
        console.log("Database connected succcessfully")
    }
});

module.exports = connection;
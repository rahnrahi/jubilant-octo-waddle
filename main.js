const express = require('express')
const app = express()
const {myLogger, manageRoutes} = require('./routes')
const mysqlConn = require('./modules/mysql_con')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(myLogger) // middleware

app.get('/', function (req, res) {
    res.send('Hello World')
})
  
manageRoutes(app)


let server = app.listen(3000, ()=>{
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
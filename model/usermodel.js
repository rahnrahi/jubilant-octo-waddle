const mysqlConn = require('../modules/mysql_con')

exports.getUserById = ID =>{
    return new Promise((resolve, reject)=>{
        mysqlConn.query(`SELECT * from 	employees where employeeNumber=${ID}`, function (error, results, fields) {
            if (error) reject(error);
            // connected!
            resolve(results)
        });
    })
}

exports.getUsers = () =>{
    return new Promise((resolve, reject)=>{
        mysqlConn.query(`SELECT * from 	employees`, function (error, results, fields) {
            if (error) reject(error);
            // connected!
            resolve(results)
        });
    })
}

exports.getUserByIdCallback = (ID, cbfun) =>{
    mysqlConn.query(`SELECT * from 	employees where employeeNumber=${ID}`, function (error, results, fields) {
        if (error) reject(error);
        // connected!
        cbfun(results)
    });
}
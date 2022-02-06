const mysqlConn = require('../modules/mysql_con')

exports.getUserById = ID =>{
    return new Promise((resolve, reject)=>{
        mysqlConn.query(`SELECT * from 	know_users where id=${ID}`, function (error, results, fields) {
            if (error) reject(error);
            // connected!
            resolve(results)
        });
    })
}

exports.getUserByIdCallback = (ID, cbfun) =>{
    mysqlConn.query(`SELECT * from 	know_users where id=${ID}`, function (error, results, fields) {
        if (error) reject(error);
        // connected!
        cbfun(results)
    });
}
const mysqlConn = require('../modules/mysql_con')

exports.getProductById = productCode =>{
    return new Promise((resolve, reject)=>{
        mysqlConn.query(`SELECT * from 	products where productCode=${productCode}`, function (error, results, fields) {
            if (error) reject(error);
            // connected!
            resolve(results)
        });
    })
}

exports.getProducts  = () =>{
    return new Promise((resolve, reject)=>{
        mysqlConn.query(`SELECT * from 	products`, function (error, results, fields) {
            if (error) reject(error);
            // connected!
            resolve(results)
        });
    })
}
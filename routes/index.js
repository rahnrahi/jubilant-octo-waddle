
const loginController = require('../controllers/login')
const userController = require('../controllers/user')
const mysqlConn = require('../modules/mysql_con')


exports.myLogger = function (req, res, next) {
    console.log('LOGGED MIDDLEWARE ROUTE', req.originalUrl)
    req.mysqlConn = mysqlConn
    next()
}

exports.manageRoutes = (app)=>{

    app.get('/login', loginController.authenticate)
    app.get('/user/:id', userController.getUser)

}

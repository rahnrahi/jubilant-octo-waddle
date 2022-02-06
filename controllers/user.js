const {getUserById, getUserByIdCallback} = require('../model/usermodel')

exports.getUser = async function (req, res) {
    let id = req.params.id 
    let users = await getUserById(id)
    res.send(users)
}



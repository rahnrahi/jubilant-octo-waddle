const {getUserById, getUsers} = require('../model/usermodel')

exports.getUser = async function (req, res) {
    let id = req.params.id 
    let users = await getUserById(id)
    res.send(users)
}

exports.getUsers = async function (req, res) {
    let users = await getUsers()
    users = users.map(r=>{
        r['fullname'] = r.name 
        delete r.name 
        return r
    })
    res.send(users)
}



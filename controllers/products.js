const { getProducts, getProductById } = require('../model/productsmodel')

exports.geProducts = async function (req, res) {
    let proucts = await getProducts()
    res.send(proucts)
}

exports.getProductById = async function (req, res) {
    let prouct = await getProductById()
    res.send(prouct)
}
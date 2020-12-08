const { createProduct, findAllProducts } = require("../controllers/products.controller")

console.log(" -> In ROUTES <- ")

module.exports = function (app){
    app.get('/api/products', findAllProducts )
    app.post('/api/products/new', createProduct)
}
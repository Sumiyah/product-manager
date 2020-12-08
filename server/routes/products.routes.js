const { createProduct, findAllProducts, viewProduct } = require("../controllers/products.controller")

console.log(" -> In ROUTES <- ")

module.exports = function (app){
    app.get('/api/products', findAllProducts )
    app.get('/api/products/:id', viewProduct)
    app.post('/api/products/new', createProduct)
}
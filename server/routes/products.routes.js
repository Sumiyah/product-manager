const { createProduct, findAllProducts, viewProduct, updateProduct, deleteProduct } = require("../controllers/products.controller")

console.log(" -> In ROUTES <- ")

module.exports = function (app){
    app.get('/api/products', findAllProducts )
    app.get('/api/products/:id', viewProduct)
    app.post('/api/products/new', createProduct)
    app.put('/api/products/update/:_id', updateProduct)
    app.delete('/api/products/delete/:_id', deleteProduct)
}
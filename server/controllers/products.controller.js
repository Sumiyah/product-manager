const { Product } = require("../models/products.models")

console.log("in Controllers :)")

//I do not think we need this
module.exports.findAllProducts = (req,res) => {
    Product.find()
    .then(allProducts => res.json({product: allProducts}))
}

module.exports.createProduct = (req, res) => {
    const {title, price, desc} = req.body
    Product.create({
        title,
        price,
        desc
    })
    .then ( product => res.json(product))
    .catch( err => res.json(err))
}

module.exports.viewProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneProduct => res.json({product: oneProduct}))
    .catch(err=>res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate({_id: req.params._id}, req.body, {new: true ,runValidators:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err=>res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params._id})
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }))
    // .then(deletedProduct => res.json(deletedProduct))
    // .catch(err=>res.json(err))
}
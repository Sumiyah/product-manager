console.log("in models ....")

const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, "Product title is required"],
        minlength: [3,"Product title should be longer than 3 characters"]
    },
    price : {
        type: Number,
        required:[true, "Product price is required"],
        min: [1,"Product price should not be less than 1"]
    },
    desc : {
        type: String,
        required:[true, "Product description is required"],
        minlength: [5,"Product description should be longer than 5 characters"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model('Product', ProductSchema)

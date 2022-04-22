const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    dateCreated:{type:Date, default: Date.now}
})

exports.Products = mongoose.model('Products', productSchema)
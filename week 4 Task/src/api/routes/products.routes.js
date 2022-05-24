const { Products } = require('../models/products')

async function getAllProducts(req,res){
    const products= await Products.find().sort({'price':1})
    res.status(200).json(products)
}

async function getProductsByCategory(req,res){
    const category = req.params.category
    query = {'category':{$regex:category, $options:'i'}}
    const products= await Products.find(query).sort({'price':1})
    res.status(200).json(products)
}

async function getProductsByName(req,res){
    const name = req.params.name
    query = {'name':{$regex:name, $options:'i'}}
    const products= await Products.find(query).sort({'price':1})
    res.status(200).json(products)
}

async function createProduct(req,res){
    const data = req.body
    const product = new Products(data)
    product.save()
    res.status(201).json(product)
}

async function getProduct(req,res){
    Products.findById(req.params.id,(err,data)=>{
        if (err){
            console.log(err)
        }
        res.status(200).json(data)
    })
}

async function updateProduct(req,res){
    data = req.body
    Products.findByIdAndUpdate(req.params.id,data,{new:true}, (err, data)=>{
        if(err){
            console.log(err)
        }
        res.status(200).json(data)
    })
}

async function deleteProduct(req,res){
    Products.findByIdAndDelete(req.params.id,(err, data)=>{
        if (err){
            console.log(err)
        }
        res.status(200).json(data)
    })
}

module.exports = {getAllProducts, getProductsByCategory, getProductsByName, createProduct, getProduct, updateProduct, deleteProduct}
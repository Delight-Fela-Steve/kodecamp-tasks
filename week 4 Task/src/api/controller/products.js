const {getAllProducts, getProductsByCategory, getProductsByName, createProduct, getProduct, updateProduct, deleteProduct} = require('../routes/products.routes')
const router = require('express').Router()
const {authorize} =  require('../middlewares/authorize')

router.get('/', authorize, getAllProducts)
router.post('/', createProduct)
router.get('/category/:category', getProductsByCategory)
router.get('/name/:name', getProductsByName)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
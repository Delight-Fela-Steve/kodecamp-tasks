const controller = require('../controller/products')
const router = require('express').Router()

router.get('/',controller.getAllProducts)
router.post('/',controller.createProduct)
router.get('/:id',controller.getProduct)
router.put('/:id',controller.updateProduct)
router.delete('/:id',controller.deleteProduct)


module.exports = router;
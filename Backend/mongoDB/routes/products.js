const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController')

router.post('/', productController.create)
router.get('/getAll', productController.getAll)
router.get('/getById/:_id', productController.getById)
router.get('/name/:name', productController.getProductsByName)
router.delete('/:_id', productController.delete)
router.put('/update/:_id', productController.update)

module.exports = router

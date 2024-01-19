const express = require('express')
const router = express.Router()
const productController = require('../controllers/ProductController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', authentication, isAdmin, productController.create)
router.get('/getAll', productController.getAll)
router.get('/getById/:_id', productController.getById)
router.get('/name/:name', productController.getProductsByName)
router.delete('/:_id', authentication, productController.delete)
router.put('/update/:_id', authentication, productController.update)
router.put('/reviews/:_id', authentication, productController.insertComment)
router.put('/like/:productId', authentication, productController.like)

module.exports = router

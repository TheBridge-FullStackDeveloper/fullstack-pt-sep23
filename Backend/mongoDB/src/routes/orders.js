const express = require('express')
const router = express.Router()
const OrderController = require('../controllers/OrderController')
const { authentication, isAuthor } = require('../middlewares/authentication')

router.post('/', authentication, OrderController.create)
router.put('/id/:_id', authentication, isAuthor, OrderController.update)

module.exports = router

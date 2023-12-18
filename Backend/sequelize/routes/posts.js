const express = require('express')
const router = express.Router()
const PostController = require('../controllers/PostController')
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/', authentication, PostController.create)
router.get('/', PostController.getAll)
router.get('/id/:id', PostController.getById)
router.get('/title/:title', PostController.getOneByName)
router.delete('/id/:id', authentication, isAdmin, PostController.delete)

module.exports = router

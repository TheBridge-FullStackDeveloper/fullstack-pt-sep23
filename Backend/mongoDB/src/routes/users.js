const express = require('express')
const router = express.Router()
const controllerdelqueseadeuser = require('../controllers/UserController')
const { authentication } = require('../middlewares/authentication')

router.post('/register', controllerdelqueseadeuser.register)
router.post('/login', controllerdelqueseadeuser.login)
router.delete('/logout', authentication, controllerdelqueseadeuser.logout)
router.get('/info', authentication, controllerdelqueseadeuser.getInfo)

module.exports = router

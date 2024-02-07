const express = require('express')
const router = express.Router()

const taskController = require('../controller/taskController')

router.post('/create', taskController.create)
router.get('/getAll', taskController.getAll)
router.get('/getById/:_id', taskController.getById)
router.put('/complete/:_id', taskController.completed)
router.put('/changeTitle/:_id', taskController.changeTitle)
router.delete('/delete/:_id', taskController.delete)

module.exports = router

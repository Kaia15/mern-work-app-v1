const taskController = require('./task.controller')
const middlewareController = require('../user/auth/middleware.controller')
const express = require('express')
const router = express.Router()

router.get('/', middlewareController.verifyToken, taskController.getAllTasks)
router.get('/filter', taskController.getTaskByField)
router.post('/create', taskController.createTask)
router.patch('/:id/edit', taskController.updateTask)
router.delete('/:id/delete', taskController.deleteTask)

module.exports = router
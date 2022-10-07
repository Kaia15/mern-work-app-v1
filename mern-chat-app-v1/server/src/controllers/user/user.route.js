const express = require('express')
const router = express.Router();
const userController = require('./user.controller')
const middlewareController = require('./auth/middleware.controller')
const authController = require('./auth/auth.controller')

router.get('/', userController.getUsers)
router.get('/:id', middlewareController.verifyToken, userController.getUser)
router.patch('/:id/edit', middlewareController.verifyToken, userController.editUser)
router.post('/signup', authController.createUser)
router.post('/login', authController.findUser)
router.get('/review/:id', userController.getReview)
router.post('/refresh', authController.requestRefreshToken)

module.exports = router
const messageController = require('./message.controller')
const express = require('express')
const router = express.Router()

router.post('/create', messageController.createMessage)

// get message with conversation id
router.get('/:id', messageController.getMessage)

module.exports = router
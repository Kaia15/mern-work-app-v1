const conversationController = require('./conversation.controller')
const express = require('express')
const router = express.Router()

router.post('/create', conversationController.createConversation)

// get conversations with user id
router.get('/:id', conversationController.getConversation)

module.exports = router

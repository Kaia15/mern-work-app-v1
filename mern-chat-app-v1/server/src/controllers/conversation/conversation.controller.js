const conversationService = require('../../services/conversation.service')

const createConversation = async(req, res, next) => {
    const conv = await conversationService.createConversation(req.body)
    if (conv) res.send(conv)
}

const getConversation = async (req, res, next) => {
    const conv = await conversationService.getConversation(req.params.id)
    if (conv) res.send(conv)
}

module.exports = {
    createConversation,
    getConversation
}
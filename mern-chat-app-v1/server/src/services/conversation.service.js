const conversation = require('../models/conversation.model')

const createConversation = async (body) => {
    const { members } = body
    const conv = await conversation.create({ members: members})
    return conv
}

const getConversation = async (id) => {
    const conv = await conversation.find({
        members: { $in: [id] }
    })
    return conv
}

module.exports = {
    createConversation,
    getConversation
}
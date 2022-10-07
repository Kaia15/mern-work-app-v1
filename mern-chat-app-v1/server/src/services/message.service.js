const conversation = require('../models/conversation.model')
const message = require('../models/message.model')

const getMessage = (id) => {
    return message.find({conversationId: id})
}

const createMessage = async (body) => {
    // console.log(body)
    const newMessage = await message.create(body)
    if (newMessage) return newMessage
    // else return {message: "Cannot send message"}
}

module.exports = {
    getMessage,
    createMessage
}

const messageService = require('../../services/message.service')
const message = require('../../models/message.model')

const getMessage = async (req, res, next) => {
    const message = await messageService.getMessage(req.params.id)
    if (message) res.send(message)
}

const createMessage = async (req, res, next) => {
    const newMessage = await messageService.createMessage(req.body)
    // console.log(typeof newMessage['text'])
    console.log(newMessage)
    if (newMessage) res.status(200).json(message)
    else throw new Error("cannot send new message")
}

module.exports = {
    getMessage,
    createMessage
}
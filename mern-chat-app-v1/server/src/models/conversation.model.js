const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    members: {
        type: Array
    }}, 
    { timestamps: true}
)

const conversation = mongoose.model('conversation', conversationSchema)
module.exports = conversation

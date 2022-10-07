const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: false
    },
    typeLogin: {
        type: String,
        enum: ["Email", "Google", "Facebook"],
        required: false
    },
    token: {
        type: String,
        required: false
    },
    friends: {
        type: Array,
        default: []
    }
}, { timestamps: true })

const user = mongoose.model('user', userSchema)
module.exports = user
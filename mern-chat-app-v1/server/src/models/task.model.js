const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type:Number,
        default: Date.now()
    },
    deadline: {
        type: String,
        required: false
    },
    progress: {
        type: String,
        enum: ["Looking", "In progress", "Done", "Cancel"],
        required: [true, "A task must have progress"],
        default: "Looking",
    },
    ownerID: {
        type: String,
    },
    notes: {
        type: String,
        required: false
    },
    category: {
        type: String,
        enum: ["daily", "work", "study", "organization"]
    },
    image: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    }
}, { timestamps: true })

const task = mongoose.model('task', taskSchema)
module.exports = task
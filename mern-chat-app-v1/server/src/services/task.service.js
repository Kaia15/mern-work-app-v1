const task = require('../models/task.model')

const getTasks = async() => {
    return task.find()
}

const getTaskByField = async(body) => {
    return task.find({...body})
}

const createTask = async(body) => {
    const createdTask = await task.create({...body})
    return createdTask
}

const updateTask = async(id, body) => {
    console.log(id)
    return task.findByIdAndUpdate(id, body, {new: true})
}

const deleteTask = async(id) => {
    // console.log(id)
    return task.findByIdAndRemove(id)
}

module.exports = {
    getTasks,
    getTaskByField,
    createTask,
    updateTask,
    deleteTask
}
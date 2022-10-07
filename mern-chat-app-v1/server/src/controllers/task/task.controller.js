const taskService = require('../../services/task.service')
const task = require('../../models/task.model')

const getAllTasks = async (req, res, next) => {
    const tasks = await taskService.getTasks()
    if (tasks) res.send(tasks)
}

const getTaskByField = async (req, res, next) => {
    const body = req.body
    const tasks = await taskService.getTaskByField(body)
    if (tasks) res.send(tasks)
}

const createTask = async (req, res, next) => {
    const body = req.body
    const created = await taskService.createTask(body)
    if (created) res.send(created)
}

const updateTask = async (req, res, next) => {
    const updated = await taskService.updateTask(req.params.id, req.body)
    if (updated) res.send(updated)
}

const deleteTask = async (req, res, next) => {
    const deleted = await taskService.deleteTask(req.params.id)
    if (deleted) res.json({message : "delete successfully!"})
}

module.exports = {
    getAllTasks,
    getTaskByField,
    createTask,
    updateTask,
    deleteTask,
}
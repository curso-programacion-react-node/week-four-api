const { getTasksService, postTaskService, putTaskService, deleteTaskService } = require("../services/Tasks")

const getTasksController = async (req, res) => {
    const serviceResponse = await getTasksService()
    return res.status(200).json(serviceResponse)
}

const postTaskController = async (req, res) => {
    const body = req.body
    const serviceResponse = await postTaskService(body)
    res.status(201).json(serviceResponse)
}

const putTaskController = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const serviceResponse = await putTaskService(id, body)
    res.status(201).json(serviceResponse)
}

const deleteTaskController = async (req, res) => {
    const id = req.params.id
    const serviceResponse = await deleteTaskService(id)
    res.status(201).json(serviceResponse)
}

module.exports = {
    getTasksController,
    postTaskController,
    putTaskController,
    deleteTaskController
}
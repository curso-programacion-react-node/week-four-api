const { getUsersService, postUserService, putUserService, deleteUserService, loginService, registerService } = require("../services/Users")

const getUsersController = (req, res) => {
    const serviceResponse = getUsersService()
    res.status(200).json(serviceResponse)
}

const postUserController = (req, res) => {
    const body = req.body
    const serviceResponse = postUserService(body)
    res.status(201).json(serviceResponse)
}

const putUserController = (req, res) => {
    const body = req.body
    const id = req.params.id
    const serviceResponse = putUserService(id, body)
    res.status(200).json(serviceResponse)
}

const deleteUserController = (req, res) => {
    const id = req.params.id
    const serviceResponse = deleteUserService(id)
    res.status(200).json(serviceResponse)
}

const loginController = async (req, res) => {
    const body = req.body
    const serviceResponse = await loginService(body)
    res.status(201).json(serviceResponse)
}

const registerController = async (req, res) => {
    const body = req.body
    const serviceResponse = await registerService(body)
    res.status(201).json(serviceResponse)
}

module.exports = {
    getUsersController,
    postUserController,
    putUserController,
    deleteUserController,
    loginController,
    registerController
}
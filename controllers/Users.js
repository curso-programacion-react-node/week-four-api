const { getUsersService, postUserService } = require("../services/Users")

const getUsersController = (req, res) => {
    const serviceResponse = getUsersService()
    res.status(200).json(serviceResponse)
}

const postUserController = (req, res) => {
    const body = req.body
    const serviceResponse = postUserService(body)
    res.status(201).json(serviceResponse)
}

module.exports = {
    getUsersController,
    postUserController
}
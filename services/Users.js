const users = require("../data/users.json")

const getUsersService = () => {
    return users
}

const postUserService = (body) => {
    return "Creado con éxito, con el body: " + JSON.stringify(body)
}

module.exports = {
    getUsersService,
    postUserService
}
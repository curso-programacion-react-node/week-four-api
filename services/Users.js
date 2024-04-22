const users = require("../data/users.json")

const getUsersService = () => {
    return users
}

const postUserService = async (body) => {
    await create("users", body)
    return "Creado con éxito, con el body: " + JSON.stringify(body)
}

const putUserService = (id, body) => {
    return "Editado con éxito, con el id: " + id + "y el body: " + JSON.stringify(body)
}

const deleteUserService = (id) => {
    return "Eliminado con éxito, con el id: " + id
}

module.exports = {
    getUsersService,
    postUserService,
    putUserService,
    deleteUserService
}
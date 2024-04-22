const { create, update, destroy, getAll } = require("../config/Firebase")
const collectionName = "tasks"

const getTasksService = async () => {
    return await getAll(collectionName)
}

const postTaskService = async (body) => {
    await create(collectionName, body)
    return "Creado con éxito, con el body: " + JSON.stringify(body)
}

const putTaskService = async (id, body) => {
    await update(collectionName, id, body)
    return "Editado con éxito, con el id: " + id + "y el body: " + JSON.stringify(body)
}

const deleteTaskService = async (id) => {
    await destroy(collectionName, id)
    return "Eliminado con éxito, con el id: " + id
}

module.exports = {
    getTasksService,
    postTaskService,
    putTaskService,
    deleteTaskService
}
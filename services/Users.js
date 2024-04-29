const { create, getByParam } = require("../config/Firebase")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const users = require("../data/users.json")
const collectionName = "users"

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

const loginService = async (body) => {
    try {
        const user = await getByParam(collectionName, "email", body.email)
        const checkPassword = await bcrypt.compare(body.password, user.password)
        if (checkPassword) {
            const token = jwt.sign({user}, process.env.JWT_SECRET, {
                expiresIn: "30s"
            })
            return {
                email: user.email,
                name: user.name,
                token
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const registerService = async (body) => {
    try {
        const user = await getByParam(collectionName, "email", body.email)
        if (!user) {
            const salt = await bcrypt.genSalt(8)
            const encryptedPassword = await bcrypt.hash(body.password, salt)
            const payload = {
                name: body.name,
                email: body.email,
                password: encryptedPassword
            }
            await create(collectionName, payload)
            return "Usuario creado con éxito"
        } else {
            return "Usuario ya existe"
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsersService,
    postUserService,
    putUserService,
    deleteUserService,
    loginService,
    registerService
}
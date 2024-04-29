const jwt = require("jsonwebtoken")
const { getByParam } = require("../config/Firebase")
const collectionName = "users"

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        const user = await getByParam(collectionName, "email", decode.user.email)

        if (user) next()
        else return res.status(404).json("No encontrado")

    } catch (error) {
        res.status(401).json("No autorizado")
    }
}

module.exports = {
    verifyToken
}
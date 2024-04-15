const express = require("express")
const http = require("http")
const cors = require("cors")
const port = process.env.PORT || "3004"
const userRoutes = require("./routes/Users")

const app = express();

/* Middlewares */
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json("Welcome to my API - version 1.0")
})

/* Users */
app.use(userRoutes)

app.put("/user/:id", (req, res) => {
    const id = req.params.id
    const body = req.body
    res.status(200).json("Editado con éxito, con el id: " + id + "y el body: " + JSON.stringify(body))
})

app.delete("/user/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json("Eliminado con éxito, con el id: " + id)
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server working on port http://localhost:" + port)
})
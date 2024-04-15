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

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server working on port http://localhost:" + port)
})
const express = require("express")
const http = require("http")
const cors = require("cors")
const port = "3001"

const app = express();

/* Middlewares */
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json("Welcome to my API - version 1.0")
})

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Server working on port http://localhost:" + port)
})
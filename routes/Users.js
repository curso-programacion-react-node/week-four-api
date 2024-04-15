const express = require("express")
const { getUsersController, postUserController } = require("../controllers/Users")
const router = express.Router()

router.get("/users", getUsersController)
router.post("/user", postUserController)

module.exports = router
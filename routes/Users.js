const express = require("express")
const { getUsersController, postUserController, putUserController, deleteUserController } = require("../controllers/Users")
const router = express.Router()

router.get("/users", getUsersController)
router.post("/user", postUserController)
router.put("/user/:id", putUserController)
router.delete("/user/:id", deleteUserController)

module.exports = router
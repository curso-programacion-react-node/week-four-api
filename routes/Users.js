const express = require("express")
const { 
    getUsersController, 
    postUserController, 
    putUserController, 
    deleteUserController, 
    loginController, 
    registerController 
} = require("../controllers/Users")
const router = express.Router()

router.get("/users", getUsersController)
router.post("/user", postUserController)
router.put("/user/:id", putUserController)
router.delete("/user/:id", deleteUserController)
router.post("/login", loginController)
router.post("/register", registerController)

module.exports = router
const express = require("express")
const { getTasksController, postTaskController, putTaskController, deleteTaskController } = require("../controllers/Tasks")
const router = express.Router()

router.get("/tasks", getTasksController)
router.post("/task", postTaskController)
router.put("/task/:id", putTaskController)
router.delete("/task/:id", deleteTaskController)

module.exports = router
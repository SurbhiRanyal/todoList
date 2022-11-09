const express = require('express');
const router = express.Router()
const todoController = require("../controller/todoController")

    router.post("/",todoController.createTodoList)
    router.get("/retrieve",todoController.getTodo)
    router.put("/:id",todoController.updatedTodo)
    router.delete("/:id",todoController.deleteTodo)

    module.exports = router
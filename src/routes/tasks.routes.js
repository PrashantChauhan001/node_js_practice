const {
  getTasks,
  addTask,
  getTask,
  updateTask,
  deleteTask,
} = require("src/controllers/tasks.controllers");

const tasksRouter = require("express").Router();

tasksRouter.route("/").get(getTasks).post(addTask);
tasksRouter.route("/:taskId").get(getTask).put(updateTask).delete(deleteTask);

module.exports = tasksRouter;

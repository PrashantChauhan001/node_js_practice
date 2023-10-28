const Task = require("src/models/Task.models");
const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler((req, res) => {
  res.status(200).send("Get all tasks");
});
const addTask = asyncHandler(async (req, res) => {
  const addedTask = await Task.create(req.body);
  res.status(201).json(addedTask);
});
const getTask = asyncHandler((req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Get task details of task ${taskId}`,
    taskId,
  });
});
const updateTask = asyncHandler((req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Get task details of task ${taskId}`,
    taskId,
    ...req.body,
  });
});
const deleteTask = asyncHandler((req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Deleted task ${taskId}`,
    taskId,
  });
});

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};

const Task = require("src/models/task.models");

const getTasks = (req, res) => {
  res.status(200).send("Get all tasks");
};
const addTask = async (req, res) => {
  const addedTask = await Task.create(req.body);
  res.status(201).json(addedTask);
};
const getTask = (req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Get task details of task ${taskId}`,
    taskId,
  });
};
const updateTask = (req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Get task details of task ${taskId}`,
    taskId,
    ...req.body,
  });
};
const deleteTask = (req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Deleted task ${taskId}`,
    taskId,
  });
};

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};

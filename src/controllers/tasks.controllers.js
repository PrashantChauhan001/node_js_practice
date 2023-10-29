const Task = require("src/models/Task.models");
const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler(async (req, res) => {
  const allTask = await Task.find({});
  res.status(200).send(allTask);
});

const addTask = asyncHandler(async (req, res) => {
  const addedTask = await Task.create(req.body);
  res.status(201).json(addedTask);
});

const getTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;
  const taskDetail = await Task.findById(taskId);
  if (taskDetail) {
    res.status(200).json(taskDetail);
  } else {
    res.status(404);
    throw new Error("Task not found");
  }
});

const updateTask = asyncHandler((req, res) => {
  const { taskId } = req.params;
  res.status(200).json({
    message: `Get task details of task ${taskId}`,
    taskId,
    ...req.body,
  });
});

const deleteTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const taskDetail = await Task.findOneAndDelete({ _id: taskId });
  if (taskDetail) {
    res.status(200).json({
      message: `${taskId} task deleted.`,
      taskDetail,
    });
  } else {
    res.status(400).json({
      message: `${taskId} task not found.`,
      taskId,
    });
  }
});

module.exports = {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
};

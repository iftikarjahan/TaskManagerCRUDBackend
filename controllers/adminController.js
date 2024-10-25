const Task = require("../models/task");
const asyncWrapper = require("../middlewares/asyncWrapper");

// const getTasks = async (req, res, next) => {
//   try {
//     const tasks = await Task.find({}); //this would return all the documents
//     // console.log(tasks);
//     res.status(200).json({tasks});  //res.json() formats the data as a json object and sends it to the client
//   } catch (error) {
//     res.status(500).json({msg:error});
//   }
// };

/*
->Here asyncWrapper takes an async fuction as an argument that has access to the req,res and
next objects 
->The asyncWrapper returns an async function that contains the access to the req,res and next
*/
const getTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask =asyncWrapper( async (req, res, next) => {
    /*
        ->The task class expects an object
        ->The express.json() middleware converts the json request body to a js object
        */
    const task = new Task(req.body);
    const result = await task.save();
    res.status(201).json({ result });
});

const getSingleTask =asyncWrapper( async (req, res, next) => {
    // We are just taking these piece of code and executing inside a wrapper
    const taskId = req.params.id;
    console.log(taskId);

    const task = await Task.findOne({ _id: taskId });
    console.log(task);
    if (!task) {
      // if we dont get the task from the database, then this error would be executed
      res.status(404).json({ msg: `No task present with id ${taskId}` });
    }
    res.status(200).json(task);
});

const updateTask =asyncWrapper( async (req, res, next) => {
    const taskId = req.params.id;
    const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(updatedTask);

    if (!updateTask) {
      res.status(404).json({ msg: `No task found with id: ${taskId}` });
    }
    res.status(200).json({ updatedTask });
});

const deleteTask =asyncWrapper( async (req, res, next) => {
    const taskId = req.params.taskId;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      res.status(404).json({ msg: `No task found with the id: ${taskId}` });
    }
    res.status(200).json({ task });
});

// Every file in node js is treated as a seperate module
module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

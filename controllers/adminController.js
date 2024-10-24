const Task = require("../models/task");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({}); //this would return all the documents
    // console.log(tasks);
    res.status(200).json({tasks});  //res.json() formats the data as a json object and sends it to the client
  } catch (error) {
    res.status(500).json({msg:error});
  }
};

const createTask = async (req, res, next) => {
  try {
    /*
        ->The task class expects an object
        ->The express.json() middleware converts the json request body to a js object
        */
    const task = new Task(req.body);
    const result = await task.save();
    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async(req, res, next) => {
  try {
    const taskId=req.params.taskId;
    console.log(taskId);
    
    const task=await Task.findOne({_id:taskId});
    console.log(task);
    if(!task){
        // if we dont get the task from the database, then this error would be executed
        res.status(404).json({msg:`No task present with id ${taskId}`});  
    }
    res.status(200).json(task);
  } catch (error) {
    // if we get other technical errors(syntactic errors), then this error is sent
    res.status(500).json({msg:error});
  }
};

const updateTask =async (req, res, next) => {
  try {
    const taskId=req.params.taskId;
    const updatedTask=await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true});
    console.log(updatedTask);
    
    if(!updateTask){
        res.status(404).json({msg:`No task found with id: ${taskId}`});
    }
    res.status(200).json({updatedTask});
  } catch (error) {
   res.status(500).json({msg:error}); 
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const taskId=req.params.taskId;
    const task=await Task.findOneAndDelete({_id:taskId});
    if(!task){
        res.status(404).json({msg:`No task found with the id: ${taskId}`});
    }
    res.status(200).json({task});
  } catch (error) {
    res.status(500).json({msg:error});
  }
};

// Every file in node js is treated as a seperate module
module.exports = {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};

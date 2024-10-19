const Task=require("../models/task");

const getTasks=(req,res,next)=>{
    res.json({name:"Iftikar",age:24});
}

const createTask=async(req,res,next)=>{
    try {
        /*
        ->The task class expects an object
        ->The express.json() middleware converts the json request body to a js object
        */ 
        const task=new Task(req.body);
        const result=await task.save();
        res.status(201).json({result});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

const getSingleTask=(req,res,next)=>{
    const taskId=req.params.taskId;
    res.json({data:"single task",taskId:taskId});
}

const updateTask=(req,res,next)=>{
    const taskId=req.params.taskId;
    res.json({data:"update task",taskId:taskId});
}

const deleteTask=(req,res,next)=>{
    const taskId=req.params.taskId;
    res.json({data:"Delete task",taskId:taskId});
}


// Every file in node js is treated as a seperate module
module.exports={
    getTasks,createTask,getSingleTask,updateTask,deleteTask
}
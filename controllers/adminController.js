const getTasks=(req,res,next)=>{
    res.json({name:"Iftikar",age:24});
}

const createTask=(req,res,next)=>{
    res.json(req.body.createdTask);
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
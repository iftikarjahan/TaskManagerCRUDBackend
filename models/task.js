const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided for creating a task"],
        minLength:[3,"Task name should be at least 3 characters long"],
        maxLength:[25, "Task name cannot be more than 25 characters long"],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model("Task",taskSchema);
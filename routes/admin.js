const express=require("express");
const router=express.Router();
const controllers=require("../controllers/adminController");

// In this app, there will be 5 routes
router.get("/all-tasks",controllers.getTasks);
router.post("/create-task",controllers.createTask);
router.get("/single-task:taskId",controllers.getSingleTask);
router.patch("/update-task:taskId",controllers.updateTask);
router.delete("/delete-task:taskId",controllers.deleteTask);

module.exports=router;
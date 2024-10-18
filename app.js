const express=require("express");
const app=express();
const adminRoutes=require("./routes/admin");

// middleware to parse json requests
/*
->the header should be set to application/json
->this will parse the json data and convert it to a js object
->After parsing, the json object is set to the req.body
*/ 
app.use(express.json());  

app.use("/admin",adminRoutes);


const port=3003;
app.listen(port,()=>{
    console.log(`Sever running at http://localhost:${port}`);
})


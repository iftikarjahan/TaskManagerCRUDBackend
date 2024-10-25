const express=require("express");
const app=express();
const adminRoutes=require("./routes/admin");
const connectDB=require("./db/connect");   //returns a promise
require('dotenv').config()
const notFound=require("./middleares/not-found");


// serving the static files
app.use(express.static("public"));

// middleware to parse json requests
/*
->the header should be set to application/json
->this will parse the json data and convert it to a js object
->After parsing, the json object is set to the req.body
*/ 
app.use(express.json());  

app.use("/admin",adminRoutes);
app.use(notFound);


const port=3003;
// console.log(process.env.MONGOUR);

// Using this, we are at first establishing connection with db and then running the server
const start=async ()=>{
    try {
        const result=await connectDB(process.env.MONGOURI);
        console.log("CONNECTED TO DB");
        app.listen(port,()=>{
            console.log(`Sever running at http://localhost:${port}`);
        })
        
    } catch (error) {
        console.log("ERROR 🎀: ",error);
    }
}

start();



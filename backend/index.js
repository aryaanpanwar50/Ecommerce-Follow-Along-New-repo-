const express = require('express');
const connectDB = require('./database/db')
const userRouter = require("./routes/user.routes")
const app = express();
require('dotenv').config();
const PORT = process.env.PORT 

app.get('/',(req,res)=>{
    try{
        res.send("Server is ready")
        console.log("My first test API is working")
    }catch(error){
        res.status(500).send("Server Error")
    }
    
});

app.use(express.json());

app.use("/api",userRouter);



app.listen(PORT,async ()=>{
    try{
        await connectDB();
        console.log(`Listening on port ${PORT}`)

    }catch(error){
        console.error("Serve failed to start")
    }

})

const express = require("express");
const app = express();
const PORT = 5000;
require('dotenv').config();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const mongoDB = require("./db");
mongoDB();

//using middlewares
app.use(express.json());


//address for different routes
const authRoutes = require("./routes/authRoute");


//path for different routes
app.use("/api/auth", authRoutes);


app.listen(PORT, (req,res)=>{
    console.log("Welcome to the server", "http://localhost:5000/");
});

app.get('/', (req,res) =>{
    res.send("Hello World");
})
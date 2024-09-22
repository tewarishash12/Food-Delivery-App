const express = require("express");
const app = express();
const PORT = 5000;

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
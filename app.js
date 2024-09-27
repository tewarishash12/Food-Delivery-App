const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require('dotenv').config();


const corsOptions = {
    origin:"http://localhost:3000",
    credentials:true
};
app.use(cors(corsOptions));

const mongoDB = require("./db");
mongoDB();

app.use(express.json());

const authRoutes = require("./routes/authRoute");
const contentRoutes = require("./routes/contentRoutes");

//path for different routes
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);


app.listen(PORT, (req,res)=>{
    console.log("Welcome to the server", "http://localhost:5000/");
});

app.get('/', (req,res) =>{
    res.send("Hello World");
})
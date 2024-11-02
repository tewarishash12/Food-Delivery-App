const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
require('dotenv').config();


const corsOptions = {
    origin:"https://frontend-git-master-tewarishash12s-projects.vercel.app/",
    credentials:true
};
app.use(cors(corsOptions));

const mongoDB = require("./db");
mongoDB();

app.use(express.json());

const authRoutes = require("./routes/authRoute");
const contentRoutes = require("./routes/contentRoutes");
const orderRoutes = require("./routes/orderRoutes");

//path for different routes
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/orders", orderRoutes);


app.listen(PORT, (req,res)=>{
    console.log("Welcome to the server", "http://localhost:5000/");
});

app.get('/', (req,res) =>{
    res.send("Hello World");
})
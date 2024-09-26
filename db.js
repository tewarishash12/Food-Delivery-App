const mongoose = require("mongoose");
require('dotenv').config();


const mongoURI = process.env.mongoURI;

const mongoConnection = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Database has been successfully");
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = mongoConnection;

const mongoose = require("mongoose");

const mongoURI = `mongodb+srv://tewarishash12:1234567890@cluster0.8drei.mongodb.net/hungerSolution?retryWrites=true&w=majority&appName=Cluster0`;

const mongoConnection = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log("Database has been successfully");
    } catch (err) {
        console.log(err.message);
    }
}


module.exports = mongoConnection;

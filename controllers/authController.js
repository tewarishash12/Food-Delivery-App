const User = require("../models/User");
const {validationResult} = require("express-validator")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async(req,res)=>{
    const err = validationResult(req);
    if(!err.isEmpty())
        return res.status(400).json({err: err.array()})

    try{
        const { username,password, email, location } =  req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.create({
            username, 
            email, 
            password:hashedPassword, 
            location 
        });
        res.json({success:true, message:"Data saved Successfully"})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Error occurred during registration" });
    }
}

exports.login = async(req,res)=>{
    try{
        const { password, email } =  req.body;
        let userData = await User.findOne({email});
        if(!userData)
            return res.status(400).json({message: "Try logging in with correct email"});

        const comparePassword = await bcrypt.compare(password,userData.password);

        if(!comparePassword)
            return res.status(400).json({message: "Enter correct password"});

        const data = {
            user:{
                id:userData._id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        return res.status(200).json({success:true, authToken});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Error occurred during registration" });
    }
}
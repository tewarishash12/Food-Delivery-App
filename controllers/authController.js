const User = require("../models/User");
const {validationResult} = require("express-validator")

exports.register = async(req,res)=>{

    const err = validationResult(req);
    if(!err.isEmpty())
        return res.status(400).json({err: err.array()})

    try{
        const { username,password, email, location } =  req.body;
        await User.create({ 
            username, 
            email, 
            password, 
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

        if(password !== userData.password)
            return res.status(400).json({message: "Enter correct password"});

        return res.status(200).json({success:true});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ success: false, message: "Error occurred during registration" });
    }
}
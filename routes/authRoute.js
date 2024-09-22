const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async(req,res)=>{
    const { username,password, email, location } =  req.body;
    try{
        await User.create({ 
            username, 
            email, 
            password, 
            location 
        });
        res.json({message:"Successful data saved"})
    } catch (err) {
        console.log(err.message);
    }
});
    
router.post("/login");

module.exports = router;
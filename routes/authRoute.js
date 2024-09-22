const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body,validationResult } = require('express-validator');

router.post("/register", [
    body('username').isLength({ min:5 }),
    body('email').isEmail(),
    body('password', 'Password must be atleast of 5 characters').isLength({ min:5 })
] ,async(req,res)=>{

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
        res.json({message:"Successful data saved"})
    } catch (err) {
        console.log(err.message);
    }
});
    
router.post("/login");

module.exports = router;
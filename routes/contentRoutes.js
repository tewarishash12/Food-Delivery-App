const express = require("express");
const router = express.Router();

router.post("/food", async(req,res) =>{
    try{
        res.send([global.food_lists, global.food_category])
    } catch(err){
        console.log(err.message);
    }
})

module.exports = router;
exports.orderList = async(req,res) =>{
    try{
        res.send([global.food_lists, global.food_category])
    } catch(err){
        console.log(err.message);
    }
}


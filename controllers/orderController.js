const Order = require("../models/Orders");

exports.dataStore = async(req,res) =>{
    let data = req.body.order_data;
    console.log(data);
    await data.splice(0,0, {order_date:req.body.order_date})

    let emailId = await Order.findOne({email:req.body.email});
    console.log(emailId)
    if(emailId === null){
        try{
            await Order.create({
                email:req.body.email,
                order_data:[data]
            }).then(() =>{
                res.json({success:true});
            })
        } catch(err) {
            console.log(err.message);
            res.send("Server Error", err.message);
        }
    }
    else{
        try{
            await Order.findOneAndUpdate({email:req.body.email},
            {$push:{order_data:data}} ).then(()=>{
                res.json({success:true})
            })
        } catch(err) {
            res.send("Server Error", err.message);
        }
    }
}
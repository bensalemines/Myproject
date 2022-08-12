const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    customerId:{
        type:String,
    },
    paymentIntentId:{
        type:String,
    },
    
    products:[],
    events:[],
    subtotal:{
        type:Number,
        required:true
    },
    total:{
        type:Number,
        required:true,
    },
    payment_status:{
        type:String,
        required:true,
    },
},
    {timestamps:true}
) ;

const Order = mongoose.model("order", orderSchema);
exports.Order = Order;

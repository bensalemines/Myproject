// const {Order} = require ("../models/userModel");
// const {authMiddleware,isUser , isAdmin} = require ("../middlewares/authMiddlaware");
// const moment = require("moment");

// const router = require ("express").Router();
// //GET ORDERS
// router.get("/",isAdmin, async(req,res)=>{
//     const query = req.query.new
//     try {
//         const order = query? await Order.find().sort({_id:-1}).limit(4):
//        await Order.find().sort({_id:-1})
//        res.status(200).send(orders);
//     } catch (error) {
//         console.log(error)
//         res.status(500).send(err)
//     }
// })

// //GET ORDER STATS
// router.get ("/stats",isAdmin ,async(req,res)=>{
//     const previousMonth = moment()
//     .month(moment().month() - 1 )
//     .set("date",1)
//     .format("YYYY-MM-DD HH:mm:ss");
   
//    try{
// const users= await User.aggregate([
//     {
//         $match:{createdAt : {$gte : new Date(previousMonth)}},
//     },
//     {
//         $project:{
//             month:{ $month : "$createdAt"},
//         }
//     },
//     {
//         $group:{
//             _id:"$month",
//             total:{$sum : 1},
//         }
//     }
// ]);
// res.status(200).send(users)
//    }catch(err){
//     console.log(err)
// res.status(500).send(err)
//    }
// });

// //GET 1 WEEK SALES

// module.exports=router;
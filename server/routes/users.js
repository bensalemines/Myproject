const {User} = require ("../models/userModel");
const {authMiddleware,isUser , isAdmin} = require ("../middlewares/authMiddlaware");
const moment = require("moment");
const { getUserList, deleteUser } = require("../controllers/userController");

const router = require ("express").Router();

//GET USER STATS
router.get ("/stats",isAdmin ,async(req,res)=>{
    const previousMonth = moment()
    .month(moment().month() - 1 )
    .set("date",1)
    .format("YYYY-MM-DD HH:mm:ss");
   
   try{
const users= await User.aggregate([
    {
        $match:{createdAt : {$gte : new Date(previousMonth)}},
    },
    {
        $project:{
            month:{ $month : "$createdAt"},
        }
    },
    {
        $group:{
            _id:"$month",
            total:{$sum : 1},
        }
    }
]);
res.status(200).send(users)
   }catch(err){
    console.log(err)
res.status(500).send(err)
   }
});
router.get('/getUserList',getUserList);
router.delete('/:_id',deleteUser)
module.exports=router;

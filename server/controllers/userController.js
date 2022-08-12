const User = require('../models/userModel');
const  bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const {validationResult} = require('express-validator')

//@desc register a new user
//@params POST/api/v1/users/register
//@acess PUBLIC
exports.register = async(req,res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {password , email,Fullname,age,gender,phoneNumber} = req.body
        const existUser = await User.findOne({email})
        if (existUser) return res.status(404).json({msg:'email is already used!'}) ;
        const salt = bcrypt.genSaltSync(12);
        const hash = await bcrypt.hashSync(password, salt);
        const newUser = await User.create({email, Fullname,age,gender,phoneNumber, password :hash});
        const token = await jwt.sign({sub:newUser._id},process.env.TOKEN_SECRET);
        res.json({msg:'User created :)', token , userInfo : {email:newUser.email, Fullname:newUser.Fullname,role:newUser.role}})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'})  
    }
};
//@desc login as a user
//@params POST/api/v1/users/login
//@acess PRIVATE users
exports.login=async(req,res)=>{
    try {
        const {password , email} = req.body;
        const existUser = await User.findOne({email})
        if (!existUser) return res.status(404).json({msg:'You should register first!'}) ;
        const verifyPassword = await bcrypt.compare(password,existUser.password);
        if(!verifyPassword) return res.status(401).json({msg:'password is incorrect!'});
        const token = await jwt.sign({sub:existUser._id},process.env.TOKEN_SECRET);
        res.json({msg:'User Connected :)', token, userInfo:{email:existUser.email, Fullname:existUser.Fullname,role:existUser.role}})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'}) 
    }
    
};
//@desc get user data
//@params Get/api/v1/users/
//@acess PRIVATE 
exports.getUserData = async(req,res)=>{
    try {
        const user = await User.findOne({_id:req.userId}).select('-password -__V');
        if(!user) return res.status(401).json({msg:'you are not authorized'});
        res.json(user);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'}) 
    }
}
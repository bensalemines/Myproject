const mongoose = require ('mongoose')
const userSchema = mongoose.Schema({
    Fullname:{
        type: String,
        required : true,
    },
    gender:{
        type: String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type: Number,
        required:true,
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    },
   

},
{timeStamps:true});
module.exports = mongoose.model('user',userSchema)
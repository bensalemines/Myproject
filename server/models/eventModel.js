const mongoose = require ('mongoose')
const eventSchema = mongoose.Schema({
    eventName:{
        type:String,
        required:true,
    },
    eventDate:{
        type:String,
        required:true,
    },
    eventActivities:{
        type:String,
        required:true, 
    },
    detailedActivities:{
        type:String,
        required:true, 
    },
    eventDescription:{
        type:String,
        required:true,
    },
    detailedDescription:{
        type:String,
        required:true,
    },
    eventPrice:{
        type:String,
        required:true,
    },
    eventImage:{
        type:String,
        required:true,
    },
    
});
module.exports = mongoose.model('event',eventSchema)
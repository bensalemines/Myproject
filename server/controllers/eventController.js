const Event = require ('../models/eventModel')

exports.createEvent =async (req,res)=>{ 
try { 
   const imgUrl = `http://localhost:4500/uploads/${req.file.filename}`;
    const {eventName, eventDate,eventActivities,eventDescription,detailedActivities,detailedDescription,eventPrice} = req.body;
    const newEvent = await Event.create({eventImage:imgUrl,eventName, eventDate,eventActivities,detailedActivities,detailedDescription,eventDescription,eventPrice});
        res.json({msg:'Event created :)', eventInfo : {eventName:newEvent.eventName,eventImage:imgUrl, eventDate:newEvent.eventDate,detailedDescription:newEvent.detailedDescription,detailedActivities:newEvent.detailedActivities, eventActivities:newEvent.eventActivities, eventDescription:newEvent.eventDescription,eventPrice:newEvent.eventPrice }})
} catch (error) {
    console.log(error)
    res.status(500).json({msg:'Something went wrong!'}) 
}
}
exports.getEventList = async (req,res)=>{
    try {
        const eventList = await Event.find({})
        res.json(eventList);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'Something went wrong!'}) 
    }
}
exports.deleteEvent = async(req,res)=>{
    try {
              await Event.findByIdAndDelete(req.params._id);
              res.status(200).send("event has been deleted...");
            } catch (error) {
              res.status(500).send(error);
            }
         
}
exports.editEvent = async(req,res)=>{
    try {
        const updatedEvent = await product.findByIdAndUpdate(
            req.params._id,{
                $set:
                req.body.event,
            },
            {new:true}
        ); 
        res.status(200).send(updatedEvent)
    } catch (error) {
        res.status(500).send(error)
    }
   
} 

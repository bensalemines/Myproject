const mongoose = require ('mongoose')

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('database is connected'))
    .catch((err) =>console.log(err))
};
module.exports = connectDB

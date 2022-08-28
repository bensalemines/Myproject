const mongoose = require ('mongoose')
require ('dotenv') .config({path:'C:/Users/HP/Desktop/CAMPING UNDER THE STARS/.env'});
const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('database is connected'))
    .catch((err) =>console.log(err))
};
module.exports = connectDB

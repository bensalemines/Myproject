const express = require ('express');
const app =  express();
require ('dotenv') .config();
app.use(express.json());
const port = process.env.PORT || 3500;
const cors= require('cors');
app.use(cors());

//database configuration
const connectDB = require('./config/connectDB');
connectDB();
//Routes
app.use('/api/v1/users',require ('./routes/appRoutes'))


app.listen(port, ()=>console.log(`server is running on ${port}`));
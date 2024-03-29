const express = require ('express');
const app =  express();
require ('dotenv') .config({path:'C:/Users/HP/Desktop/CAMPING UNDER THE STARS/.env'});
app.use(express.json());
const port = process.env.PORT || 4500;
const cors= require('cors');
app.use(cors({ origin: 'https://campingunderthestars.herokuapp.com', methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));

//database configuration
const connectDB = require('./config/connectDB');
connectDB();
//Routes
app.use('/api/v1/users',require ('./routes/appRoutes'));
app.use('/api/v1/events',require('./routes/eventRoutes'));
app.use('/api/v1/products',require('./routes/productRoutes'));
app.use('/api/v1/stripe',require('./routes/stripeRoutes'));
app.use('/api/v1/users' , require('./routes/users'))
//Images Routes
app.use('/uploads',express.static('./uploads'))

//deployment setting
const path = require('path')
if(process.env.NODE_ENV ==='deployment'){
    app.get('*',(req,res)=>res.sendFile(__dirname ,'../','client','build','index.html'))
    app.use(express.static(path.join(__dirname ,'../','client','build')))
   
}


app.listen(port, ()=>console.log(`server is running on ${port}`));
const express = require ('express');
const app =  express();
require ('dotenv') .config();
app.use(express.json());
const port = process.env.PORT || 4500;
const cors= require('cors');
app.use(cors());

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

app.listen(port, ()=>console.log(`server is running on ${port}`));
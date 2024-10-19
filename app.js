const express=require('express');
const morgan=require('morgan');
const app=new express();
app.use(morgan('dev'));
const bRoutes=require('./Routes/empRoutes');
app.use=('/employee',bRoutes);
require('dotenv').config();
const PORT=process.env.PORT
require('./db/connection');







app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
    
})
const express= require('express');

const app=express();
const port=8000;

const connectDB=require('./db/dbconnection');
const User =require('./db/user');
const cors=require('cors');
// Middleware
app.use(express.json());

// Enable Cors 
app.use(cors())


connectDB();

app.listen(port,()=>{
    console.log('server is running port 8000')
})
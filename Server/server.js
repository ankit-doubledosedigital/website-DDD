const express = require('express');
// const User=require('./model/user');

const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const cors = require('cors');
// Middleware
app.use(express.json());

// Enable Cors 
app.use(cors())

// Registration
app.post('/register',async(req,res)=>{
    try{
        const {username,email,confirmPassword,password} =req.body;
        const user =new User({username,email,confirmPassword,password});
         await user.save();
         
        res.status(201).json({message:'Registration Successfull'})

    }catch(error){
        res.status(500).json({error:'Registration Failed'})

    }
        //  console.log("🚀 ~ app.post ~ user:", user)
})


// Log in 
app.post('/login', async (req, res) => {
    try {
        console.log("login")
        const { email, password } = req.body;
        console.log("🚀 ~ app.post ~ req.body:", req.body)
        const user = await User.findOne({ email,password });
        console.log("🚀 ~ app.post ~ user:", user)
        if (!email) {
            return res.status(401).json({ error: 'invalid username or Password' })

        }
        if (user.password == password ) {
            return res.status(200).json({ message: 'login successfull ' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
})

connectDB();


app.listen(port, () => {
    console.log('server is running port 8080')
})
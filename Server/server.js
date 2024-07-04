const express = require('express');
// const User=require('./model/user');

const app = express();
const port = 8000;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const cors = require('cors');
// Middleware
app.use(express.json());

// Enable Cors 
app.use(cors())

// Log in 
app.post('/login'), async (req, res) => {
    try {
        console.log("login")
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log(user);
        if (!user) {
            return res.status(401).json({ error: 'invalid username or Password' })

        }
        if (user.password !== password) {
            return res.status(200).json({ message: 'login successfull ' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
}


connectDB();


app.listen(port, () => {
    console.log('server is running port 8000')
})
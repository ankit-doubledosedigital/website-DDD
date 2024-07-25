const express = require('express');
const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');

const Account_Info = require('./model/Account_info');
const cors = require('cors');

// Middleware
app.use(express.json());
// Enable Cors 
app.use(cors())

app.use('/contact', require('./routes/contact'));
app.use('/text', require('./routes/Text'));
app.use('/audio', require('./routes/audio'));
app.use('/video', require('./routes/video'));
app.use('/image', require('./routes/image'));
app.use('/user', require('./routes/user'));
app.use('/login', require('./routes/user'));
app.use('/register', require('./routes/register'));




// Account_Info
// Endpoint to fetch all users
app.get('/login', async (req, res) => {
    try {
        const users = await Account_Info.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});







connectDB();


app.listen(port, () => {
    console.log('server is running port 8080')
})
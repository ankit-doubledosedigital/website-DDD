const express = require('express');
// const User=require('./model/user');
const multer = require('multer');
const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const image = require('./model/imageSchema');
const cors = require('cors');
// Middleware
app.use(express.json());

// Enable Cors 
app.use(cors())


// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images'); // Uploads directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename (timestamp-originalname)
    },
});

// Multer upload instance
const upload = multer({ storage: storage });
app.post('/image/upload', upload.single('image'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const description = req.body.description; // Description from form data

        // Optionally save file info to database or process further
        console.log('File uploaded:', file);
        console.log('Description:', description);
        const imagePath = req.file.path;
        //save in database
        const Image = new image({ description, imagePath });
        await Image.save();

        // Respond with a success message
        res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error('Image upload error:', error);
        res.status(500).json({ error: 'Image upload failed' });
    }
});

// Registration
app.post('/register', async (req, res) => {
    try {
        const { username, email, confirmPassword, password } = req.body;
        const user = new User({ username, email, confirmPassword, password });
        await user.save();

        res.status(201).json({ message: 'Registration Successfull' })

    } catch (error) {
        res.status(500).json({ error: 'Registration Failed' })

    }
})


// Log in 
app.post('/login', async (req, res) => {
    try {
        console.log("login")
        const { email, password } = req.body;
        console.log("🚀 ~ app.post ~ req.body:", req.body)
        const user = await User.findOne({ email, password });
        console.log("🚀 ~ app.post ~ user:", user)
        if (!email) {
            return res.status(401).json({ error: 'invalid username or Password' })

        }
        if (user.password == password) {
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
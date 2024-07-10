const express = require('express');
// const User=require('./model/user');

const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const cors = require('cors');
const ImageUpload = require('./model/image-upload');
const multer = require('multer');

// Middleware
app.use(express.json());

// const upload = multer({ dest: 'uploads/' }); // configure multer to save files to the 'uploads' folder

// Enable Cors 
app.use(cors())

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
    //  console.log("🚀 ~ app.post ~ user:", user)
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

// Image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/image', upload.single('image'), async (req, res) => {
    try {
        
        const { description } = req.body;
        const imagePath = req.file.path; // multer adds the file info to req.file
        console.log("🚀 ~ app.post ~ imagePath:", imagePath)
        // console.log("Image upload");

        // Check if the required fields are provided
        if (!description || !imagePath) {
            return res.status(400).json({ error: 'Description and image are required' });
        }

        // Create a new image document
        const newImage = new ImageUpload({
            image: imagePath,
            descr: description,
        });
        console.log("🚀 ~ app.post ~ newImage:", newImage)

        // Save the image document to the database
        await newImage.save();

        return res.status(200).json({ message: 'Image upload successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Image upload failed' });
    }
});



connectDB();


app.listen(port, () => {
    console.log('server is running port 8080')
})
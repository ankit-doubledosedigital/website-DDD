const express = require('express');
// const User=require('./model/user');

const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const ImageUpload = require('./model/image-upload');
const TextUpload = require('./model/text-upload');
const VideoUpload=require('./model/Video-upload');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
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
// Setup multer for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Imageuploads/');
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

        // Check if the required fields are provided
        if (!description || !imagePath) {
            return res.status(400).json({ error: 'Description and image are required' });
        }

        // Create a new image document
        const newImage = new ImageUpload({
            image: imagePath,
            descr: description,
        });

        // Save the image document to the database
        await newImage.save();

        return res.status(200).json({ message: 'Image upload successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Image upload failed' });
    }
});

//  Text_Upload

app.post('/text', upload.single('text'), async (req, res) => {
    try {
        const { text } = req.body;

        // Check if the required fields are provided
        if (!text) {
            return res.status(400).json({ error: 'Text required' });
        }

        // Create a new text document
        const newText = new TextUpload({
            text: text,

        });
        // Save the text document to the database
        await newText.save();
        return res.status(200).json({ message: 'Text upload successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Text upload failed' });
    }
});

//  Video Upload

// Ensure the directory exists
const uploadDir = path.join(__dirname, 'video-uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Setup multer for video uploads
const store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
    }
});
const videoUpload = multer({ storage: store });

app.post('/video', videoUpload.single('video'), async (req, res) => {
    try {
        const { description } = req.body;
        const videoPath = req.file.path; // multer adds the file info to req.file

        // Check if the required fields are provided
        if (!description || !videoPath) {
            return res.status(400).json({ error: 'Description and video are required' });
        }

        // Create a new video document
        const newVideo = new VideoUpload({
            video: videoPath,
            descr: description,
        });

        // Save the video document to the database
        await newVideo.save();

        return res.status(200).json({ message: 'Video upload successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Video upload failed' });
    }
});

        




connectDB();


app.listen(port, () => {
    console.log('server is running port 8080')
})
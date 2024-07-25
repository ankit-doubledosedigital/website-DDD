const express = require('express');
// const User=require('./model/user');
const multer = require('multer');
const Text = require('./model/textSchema');
const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const image = require('./model/imageSchema');
const Audio = require('./model/audioSchema');
const Video = require('./model/videoSchema');
const contactMessage = require('./model/contactSchema');
const cors = require('cors');
// Middleware
app.use(express.json());

// Enable Cors 
app.use(cors())



// Multer storage configuration for image
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images'); // Uploads directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename (timestamp-originalname)
    },
});

// Multer storage configuration for audio

const audioStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'audio'); // Uploads directory for audio
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`); // Unique filename (timestamp-originalname)
    },
});

const videoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'videos');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

// Multer upload instance
// const upload = multer({ storage: storage });
const uploadImage = multer({ storage: imageStorage });
const uploadAudio = multer({ storage: audioStorage });
const uploadVideo = multer({ storage: videoStorage });

app.post('/image/upload', uploadImage.single('image'), async (req, res) => {
    try {
        console.log("Kit");
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


app.post('/audio/upload', uploadAudio.single('audio'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const description = req.body.description;

        const audioPath = req.file.path;

        const newAudio = new Audio({ description, audioPath });
        await newAudio.save();

        res.status(200).json({ message: 'Audio uploaded successfully' });
    } catch (error) {
        console.error('Audio upload error:', error);
        res.status(500).json({ error: 'Audio upload failed' });
    }
});

app.post('/video/upload', uploadVideo.single('video'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const description = req.body.description;
        const videoPath = req.file.path;
        const newVideo = new Video({ description, videoPath });
        await newVideo.save();
        res.status(200).json({ message: 'Video uploaded successfully' });
    } catch (error) {
        console.error('Video upload error:', error);
        res.status(500).json({ error: 'Video upload failed' });
    }
});


app.post('/text/upload', async (req, res) => {
    try {
        console.log('kk');
        const { text } = req.body;
        console.log({ text });
        if (!text) {
            return res.status(400).json({ error: 'No text provided' });
        }
        const newText = new Text({ content: text });
        await newText.save();
        res.status(200).json({ message: 'Text uploaded successfully' });
    } catch (error) {
        console.error('Text upload error:', error);
        res.status(500).json({ error: 'Text upload failed' });
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
});


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
});

// Contact Us
app.post('/contactus', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new contact message instance
        const newContactMessage = new contactMessage({ name, email, message });

        // Save the contact message to the database
        await newContactMessage.save();

        // Respond with a success message
        res.status(200).json({ message: 'Contact message received successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Contact us error:', error);

        // Respond with a server error status
        res.status(500).json({ error: 'Failed to submit contact message' });
    }
});


connectDB();

app.listen(port, () => {
    console.log('server is running port 8080')
})


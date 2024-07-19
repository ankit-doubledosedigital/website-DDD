const express = require('express');
const app = express();
const port = 8080;

const connectDB = require('./db/dbconnection');
const User = require('./model/user');
const ImageUpload = require('./model/image-upload');
const VideoUpload = require('./model/Video-upload');
// const AudioUpload = require('./model/Audio-upload');
const Account_Info = require('./model/Account_info');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

// Middleware
app.use(express.json());
// Enable Cors 
app.use(cors())

app.use('/contact', require('./routes/contact'));
app.use('/text', require('./routes/Text'));
app.use('/audio', require('./routes/audio'));


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
            return res.status(200).json({ message: 'login successfull ', user: user });
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
        newImage.rewards += 20;
        console.log("🚀 ~ app.post ~ newImage:", newImage)
        

        return res.status(200).json({ message: 'Image upload successful',newImage:newImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Image upload failed' });
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
            return res.status(200).json({ message: 'Login successfull ', user: user });
            // console.log("🚀 ~ app.post ~ user:", user)
            
        }
    } catch (error) {
        res.status(500).json({ error: 'Login failed' })
    }
})


//  Audio Upload
// Ensure the directory exists
// const uploadDi = path.join(__dirname, 'Audio-uploads');
// if (!fs.existsSync(uploadDi)) {
//     fs.mkdirSync(uploadDi);
// }

// // Setup multer for video uploads
// const Save = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname);
//     }
// });
// const audioUpload = multer({ storage: Save });

// app.post('/audio', audioUpload.single('audio'), async (req, res) => {
//     try {
//         const { description } = req.body;
//         const audioPath = req.file.path; // multer adds the file info to req.file

//         // Check if the required fields are provided
//         if (!description || !audioPath) {
//             return res.status(400).json({ error: 'Description and video are required' });
//         }

//         // Create a new video document
//         const newAudio = new AudioUpload({
//             audio: audioPath,
//             descr: description,
//         });

//         // Save the video document to the database
//         await newAudio.save();

//         return res.status(200).json({ message: 'Audio upload successful' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Audio upload failed' });
//     }
// });





// Video-Upload
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


//  Reward-point
// Sample data for reward points
// const rewardPointsData = {
//     points: 1500
// };

// // Endpoint to get reward points
// app.get('/reward-points', (req, res) => {
//     res.json(rewardPointsData);
// });






connectDB();


app.listen(port, () => {
    console.log('server is running port 8080')
})
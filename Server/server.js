const express = require('express');
const cors = require('cors');
const connectDB = require('./db/dbconnection');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);
app.use('/contact', contactRoutes);

connectDB();

app.listen(port, () => {
    console.log('Server is running on port 8080');
});

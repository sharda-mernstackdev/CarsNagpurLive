const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Car model
const carSchema = new mongoose.Schema({
  carName: String,
  brand: String,
  kilometer: Number,
  fuelType: String,
  owner: String,
  price: Number,
  description: String,
  images: [String]
});

const Car = mongoose.model('Car', carSchema);

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload-car', upload.array('images', 5), async (req, res) => {
  try {
    const carData = JSON.parse(req.body.carData);
    const uploadedFiles = req.files;

    const newCar = new Car({
      ...carData,
      images: uploadedFiles.map(file => `/uploads/${file.filename}`)
    });

    await newCar.save();

    res.status(200).json({ message: 'Car details uploaded successfully', carId: newCar._id });
  } catch (error) {
    console.error('Error processing upload:', error);
    res.status(500).json({ error: 'Failed to process upload' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
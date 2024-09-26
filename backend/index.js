// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

try {
    mongoose.connect('mongodb://localhost:27017/carsngp', { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("mongo connected");
    
} catch (error) {
    console.log(error);
    
}


const UserSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
  otpExpiry: Date
});

const User = mongoose.model('User', UserSchema);



app.post('/api/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP valid for 10 minutes

  try {
    await User.findOneAndUpdate(
      { phoneNumber },
      { otp, otpExpiry },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    // In a real-world scenario, you would send the OTP via SMS here
    console.log(`OTP for ${phoneNumber}: ${otp}`);

    res.json({ message: 'OTP sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send OTP' });
  }
});

app.post('/api/verify-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });

    if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // Clear the OTP after successful verification
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();

    const token = jwt.sign({ phoneNumber }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: 'OTP verified successfully', token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify OTP' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


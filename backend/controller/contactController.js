const Contact = require('../model/contactModel');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide name, email, and message' });
    }

    // Create new contact submission
    const newContact = new Contact({
      name,
      email,
      message
    });

    // Save to database
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error in submitContact:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
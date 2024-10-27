const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carName: { type: String, required: true },
  brand: { type: String, required: true },
  kilometer: { type: Number, required: true },
  petrol: { type: Boolean, default: false },
  diesel: { type: Boolean, default: false },
  owner: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String }], // Array of image URLs
  createdAt: { type: Date, default: Date.now },
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
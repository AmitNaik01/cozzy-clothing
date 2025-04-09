const mongoose = require('mongoose');

const tshirtSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  color: { type: String, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Tshirt', tshirtSchema);

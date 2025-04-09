const Tshirt = require('../models/tshirtModel');

// Create
exports.createTshirt = async (req, res) => {
  try {
    const tshirt = new Tshirt(req.body);
    await tshirt.save();
    res.status(201).json(tshirt);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
exports.getTshirts = async (req, res) => {
  const tshirts = await Tshirt.find();
  res.json(tshirts);
};

// Read One
exports.getTshirt = async (req, res) => {
  const tshirt = await Tshirt.findById(req.params.id);
  if (!tshirt) return res.status(404).json({ error: "Not found" });
  res.json(tshirt);
};

// Update
exports.updateTshirt = async (req, res) => {
  const tshirt = await Tshirt.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!tshirt) return res.status(404).json({ error: "Not found" });
  res.json(tshirt);
};

// Delete
exports.deleteTshirt = async (req, res) => {
  const tshirt = await Tshirt.findByIdAndDelete(req.params.id);
  if (!tshirt) return res.status(404).json({ error: "Not found" });
  res.json({ message: "Deleted successfully" });
};

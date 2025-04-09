const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const TShirt = require('../models/tshirtModel');

// Protected routes
router.post('/', protect, async (req, res) => {
  const tshirt = new TShirt(req.body);
  await tshirt.save();
  res.status(201).json(tshirt);
});

// Public route
router.get('/', async (req, res) => {
  const tshirts = await TShirt.find();
  res.json(tshirts);
});

module.exports = router;

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const tshirtRoutes = require('./routes/tshirtRoutes');
const authRoutes = require('./routes/auth'); // optional

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // or your deployed frontend
  credentials: true
}));

// Rate Limiter - applies to all /api/* routes
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.'
});
app.use('/api/', apiLimiter);

// Routes
app.use('/api/tshirts', tshirtRoutes);
app.use('/api/auth', authRoutes); // optional, for login/register

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));

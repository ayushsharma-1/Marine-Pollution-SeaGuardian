require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const extinctAnimalsRoutes = require('./routes/extinctAnimals');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas - extinctAnimalsDB'))
.catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', extinctAnimalsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

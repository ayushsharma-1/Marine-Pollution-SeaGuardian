const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const extinctAnimalsRoutes = require('./routes/extinctAnimals');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/extinctAnimalsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api', extinctAnimalsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const router = express.Router();
const ExtinctWaterAnimal = require('../models/ExtinctWaterAnimal');

// Route to fetch all extinct water animals
router.get('/extinct-water-animals', async (req, res) => {
  try {
    // Fetch all animals, optionally add pagination
    const animals = await ExtinctWaterAnimal.find({});
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching extinct water animals', error });
  }
});

module.exports = router;
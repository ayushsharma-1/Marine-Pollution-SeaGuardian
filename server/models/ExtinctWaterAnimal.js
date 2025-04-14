const mongoose = require('mongoose');

const ExtinctWaterAnimalSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  biologicalName: { 
    type: String, 
    required: true 
  },
  yearExtinct: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String,
    default: "/api/placeholder/300/200"
  }
});

const ExtinctWaterAnimal = mongoose.model('ExtinctWaterAnimal', ExtinctWaterAnimalSchema);

module.exports = ExtinctWaterAnimal;
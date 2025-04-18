require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const extinctAnimalsRoutes = require('./routes/extinctAnimals');
const ExtinctWaterAnimal = require('./models/ExtinctWaterAnimal'); // Adjust path if needed

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Sample extinct animals data
const extinctWaterAnimals = [
  {
    name: "Steller's Sea Cow",
    biologicalName: "Hydrodamalis gigas",
    yearExtinct: 1768,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Caribbean Monk Seal",
    biologicalName: "Monachus tropicalis",
    yearExtinct: 1952,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Baiji (Yangtze River Dolphin)",
    biologicalName: "Lipotes vexillifer",
    yearExtinct: 2006,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Great Auk",
    biologicalName: "Pinguinus impennis",
    yearExtinct: 1844,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Japanese Sea Lion",
    biologicalName: "Zalophus japonicus",
    yearExtinct: 1974,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Haast's Eagle",
    biologicalName: "Hieraaetus moorei",
    yearExtinct: 1400,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Labrador Duck",
    biologicalName: "Camptorhynchus labradorius",
    yearExtinct: 1878,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Passenger Pigeon",
    biologicalName: "Ectopistes migratorius",
    yearExtinct: 1914,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Kona Grosbeak",
    biologicalName: "Chloridops kona",
    yearExtinct: 1996,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Golden Toad",
    biologicalName: "Incilius periglenes",
    yearExtinct: 1989,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Ivory-billed Woodpecker",
    biologicalName: "Campephilus principalis",
    yearExtinct: 2021,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Dodo",
    biologicalName: "Raphus cucullatus",
    yearExtinct: 1662,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Pyrenean Ibex",
    biologicalName: "Capra pyrenaica pyrenaica",
    yearExtinct: 2000,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Western Black Rhinoceros",
    biologicalName: "Diceros bicornis longipes",
    yearExtinct: 2011,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Tasmanian Tiger",
    biologicalName: "Thylacinus cynocephalus",
    yearExtinct: 1936,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Crow",
    biologicalName: "Corvus hawaiiensis",
    yearExtinct: 2002,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Spix's Macaw",
    biologicalName: "Cyanopsitta spixii",
    yearExtinct: 2000,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Pinta Island Tortoise",
    biologicalName: "Chelonoidis abingdonii",
    yearExtinct: 2012,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Guam Flying Fox",
    biologicalName: "Pteropus tokudae",
    yearExtinct: 1968,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Po'ouli",
    biologicalName: "Melamprosops phaeosoma",
    yearExtinct: 2004,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Dutch Subspecies of the Porbeagle Shark",
    biologicalName: "Lamna nasus",
    yearExtinct: 2015,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Caribbean Manatee",
    biologicalName: "Trichechus manatus",
    yearExtinct: 1952,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Amazon River Dolphin Subspecies",
    biologicalName: "Inia geoffrensis",
    yearExtinct: 2018,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Madeiran Soft-shelled Crab",
    biologicalName: "Eriphia verrucosa",
    yearExtinct: 1990,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Mariana Flying Fox",
    biologicalName: "Pteropus mariannus",
    yearExtinct: 1994,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Caribbean Reef Shark Subspecies",
    biologicalName: "Carcharhinus perezi",
    yearExtinct: 2010,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Monk Seal Subspecies",
    biologicalName: "Monachus schauinslandi",
    yearExtinct: 1988,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Galapagos Giant Tortoise Subspecies",
    biologicalName: "Chelonoidis nigra",
    yearExtinct: 1994,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Vaquita",
    biologicalName: "Phocoena sinus",
    yearExtinct: 2018,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Chinese Paddlefish",
    biologicalName: "Psephurus gladius",
    yearExtinct: 2020,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Crow Subspecies",
    biologicalName: "Corvus hawaiiensis",
    yearExtinct: 2002,
    image: "/api/placeholder/300/200"
  },
  {
    name: "North Atlantic Right Whale Subspecies",
    biologicalName: "Eubalaena glacialis",
    yearExtinct: 2017,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Galapagos Sea Lion Subspecies",
    biologicalName: "Zalophus wollebaeki",
    yearExtinct: 1995,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Mediterranean Monk Seal Subspecies",
    biologicalName: "Monachus monachus",
    yearExtinct: 1994,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Green Sea Turtle Subspecies",
    biologicalName: "Chelonia mydas",
    yearExtinct: 1985,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Yangtze Giant Softshell Turtle",
    biologicalName: "Rafetus swinhoei",
    yearExtinct: 2019,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Blue Marlin Subspecies",
    biologicalName: "Makaira nigricans",
    yearExtinct: 1990,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Atlantic Gray Whale",
    biologicalName: "Eschrichtius robustus",
    yearExtinct: 1750,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Caribbean Reef Shark",
    biologicalName: "Carcharhinus perezi",
    yearExtinct: 2010,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Monk Seal",
    biologicalName: "Monachus schauinslandi",
    yearExtinct: 1988,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Lake Megachile Bee",
    biologicalName: "Megachile rotundata",
    yearExtinct: 2005,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Platypus Subspecies",
    biologicalName: "Ornithorhynchus anatinus",
    yearExtinct: 1990,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Green Sea Turtle",
    biologicalName: "Chelonia mydas",
    yearExtinct: 1985,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Shortfin Mako Shark Subspecies",
    biologicalName: "Isurus oxyrinchus",
    yearExtinct: 2015,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Atlantic Blue Marlin",
    biologicalName: "Makaira nigricans",
    yearExtinct: 1990,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Dusky Shark Subspecies",
    biologicalName: "Carcharhinus obscurus",
    yearExtinct: 2010,
    image: "/api/placeholder/300/200"
  },
  {
    name: "Hawaiian Spinner Dolphin",
    biologicalName: "Stenella longirostris",
    yearExtinct: 1995,
    image: "/api/placeholder/300/200"
  }
];
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection and Seeding
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB Atlas');

    // Force Seed the database (remove any existing data before inserting new data)
    console.log('Force seeding the database...');
    try {
      // Clear existing data
      await ExtinctWaterAnimal.deleteMany({});

      // Insert new data
      await ExtinctWaterAnimal.insertMany(extinctWaterAnimals);
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding database:', error);
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Routes
app.use('/api', extinctAnimalsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');
const ReportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        format: 'email'
    },
    locationPollution: {
        type: String,
        required: false
    },
    typeOfPollution: {
        type: String,
        required: true
    },
    areaOfPollution: {
        type: String,
        required: true
    },
    polybagsPresent: {
        type: String,
        required: true
    },
    image: {
        type: String,
        format: 'uri'
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    }
});

  const details = mongoose.model("Reports", ReportsSchema);

module.exports = details;


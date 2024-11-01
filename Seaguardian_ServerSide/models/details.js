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
        validate: {
            validator: function(v) {
                // Simple email validation using regex
                return /\S+@\S+\.\S+/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    locationPollution: {
        type: String
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
        type: String
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const Reports = mongoose.model("Reports", ReportsSchema);

module.exports = Reports;

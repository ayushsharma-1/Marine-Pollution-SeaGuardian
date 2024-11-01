const mongoose = require('mongoose');

const NGORegistrationSchema = new mongoose.Schema({
    ngoName: {
        type: String,
        required: true
    },
    Address:{
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String,
            required: true
        },
    },
    registrationNo: {
        type: String,
        required: true
    },
    workingAreas: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    }
});

const NGORegistration = mongoose.model("NGORegistration", NGORegistrationSchema);

module.exports = NGORegistration;

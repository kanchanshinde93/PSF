const mongoose = require('mongoose');

const policeStationSchema = mongoose.Schema({
    name: String,
    zone: String,
    pincode : Number,
    city : String
})

const policeStationModel = mongoose.model('Police-Station', policeStationSchema);

module.exports = policeStationModel;
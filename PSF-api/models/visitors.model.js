const mongoose = require('mongoose');

const visitorSchema = mongoose.Schema ({

    visitorName : String,
    visitorFatherName : String,
    visitorPhone : Number,
    visitorAddress : String,
    purpose : String,
    attenderName : String

});

const visitorModel = mongoose.model('Visitors', visitorSchema);

module.exports = visitorModel;
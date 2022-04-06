const mongoose = require('mongoose');

const visitorSchema = mongoose.Schema ({

    psId: String,
    psUserId: String,
    psName: String,
    visitorName : String,
    visitorFatherName : String,
    visitorPhone : Number,
    visitorAddress : String,
    purpose : String,
    attenderName : String,
    status: Number
},

{timestamps: true
});

const visitorModel = mongoose.model('Visitors', visitorSchema);

module.exports = visitorModel;

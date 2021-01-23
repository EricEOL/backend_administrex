const mongoose = require('mongoose');

const RequisitionSchema = mongoose.Schema({
    req_number: Number,
    req_section: String,
    req_type: String,
    req_object: String,
    value: Number,
    created_at: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Requisition', RequisitionSchema);
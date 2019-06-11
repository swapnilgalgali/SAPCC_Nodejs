const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let POSchema = new Schema({
    bookingref: {type: String, required: true, max: 100},
    ponumber: {type: Number, required: true},
    cusomterid: {type: String, required: true,max: 30},
});


// Export the model
module.exports = mongoose.model('PO', POSchema);
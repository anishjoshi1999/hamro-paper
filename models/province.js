const mongoose = require('mongoose');
const provinceSchema = new mongoose.Schema({
    provinceName: {
        type: String,
        required: 'This field is required.'
    },
    provinceNumber: {
        type: Number,
        required: 'This field is required.'
    },
    provinceURL: {
        type: String,
        required: 'This field is required.'
    }
});

module.exports = mongoose.model('Province', provinceSchema);
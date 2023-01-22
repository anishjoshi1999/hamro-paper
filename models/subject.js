const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: 'This field is required.'
    },
    subjectURL: {
        type: String,
        required: 'This field is required.'
    }
});

module.exports = mongoose.model('Subject', subjectSchema);
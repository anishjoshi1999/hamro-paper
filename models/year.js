const mongoose = require('mongoose');
const yearSchema = new mongoose.Schema({
    year:{
        type:Number,
        required:"This field is required"
    },
    image:{
        type:String,
        required:"This field is required"
    }
});

module.exports = mongoose.model('Year', yearSchema);
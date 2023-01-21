const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  homePageURL: {
    type: String,
    required: 'This field is required.'
  },
  viewAllURL: {
    type: String,
    required: 'This field is required.'
  },
  bottomURL: {
    type: String,
    required: 'This field is required.'
  },
  provinces:{
    type:Array,
    required:"Provinces are required"
  }
});
module.exports = mongoose.model('Info', infoSchema);
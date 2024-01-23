
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  color: {
    type: String,
    required: true
  },
  model: String,
  make: String,
  registrationNo: String,
});

module.exports = mongoose.model('Car', carSchema);

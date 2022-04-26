const mongoose = require('mongoose');

const picturesSchema = new mongoose.Schema({
  url: { type: String, required: true },
  urlCopy: { type: String, required: true },
  addDate: { type: Date, required: true },
  downloadDate: { type: Date, required: true }
});

module.exports = mongoose.model('Picture', picturesSchema);
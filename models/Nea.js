const mongoose = require('../database/mongoose');

const neasSchema = new mongoose.Schema({
  fullName: {
    type: String,
    unique: true,
    required: true,
  },
  a: {
    type: Number,
    required: true,
  },
  b: {
    type: Number,
    required: true,
  },
  i: {
    type: Number,
    required: true,
  },
  om: {
    type: Number,
    required: true,
  },
  w: {
    type: Number,
    required: true,
  },
  ma: {
    type: Number,
    required: true,
  },
});

const Nea = mongoose.model('Nea', neasSchema);

module.exports = Nea;

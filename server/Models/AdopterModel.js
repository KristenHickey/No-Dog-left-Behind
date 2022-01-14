const mongoose = require('mongoose');

const adopterSchema = new mongoose.Schema({
  //look for enum
  genderPref: {
    type: String,
    required: true
  },
  agePref: {
    type: Array,
    required: true
  },
  sizePref: {
    type: Array,
    required: true
  },
  breedPref: {
    type: Array,
    required: true
  },
  outdoorSpace: {
    type: String,
    required: true
  },
  dogs: {
    type: Boolean,
    required: true
  },
  cats: {
    type: Boolean,
    required: true
  },
  smallAnimals: {
    type: Boolean,
    required: true
  },
  children: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  specialNeeds: {
    type: Boolean,
    required: true
  },
  maxAlone: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const adopter = mongoose.model('adopter', adopterSchema);

module.exports = adopter;
const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  imgs: {
    type: Array,
    required: true
  },
  outdoorSpace: {
    type: String,
    required: true
  },
  cats: {
    type: Boolean,
    required: true
  },
  children: {
    type: String,
    required: true
  },
  maxAlone: {
    type: Number,
    required: true
  },
  onlyDog: {
    type: Boolean,
    required: true
  },
  smallAnimals: {
    type: Boolean,
    required: true
  },
  specialNeeds: {
    type: String,
    required: true
  }
})

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;
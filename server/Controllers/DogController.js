const Dog = require('../Models/DogModel');

async function getAll(req, res) {
  try {
    const allDogs = await Dog.find();
    res.status(200)
    res.send(allDogs);
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function getOneDog(req, res) {
  console.log(req.params)
  try {
    const { id } = req.params
    const dog = await Dog.findById(id)
    res.status(200)
    res.send(dog)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function addDog(req, res) {
  try {

  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

module.exports = { getAll, addDog, getOneDog }
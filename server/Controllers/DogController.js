const Dog = require('../Models/DogModel');

async function getAll(req, res) {
  try {
    const allDogs = await Dog.find();
    console.log(allDogs)
    res.status(200)
    res.send(allDogs);
  } catch (error) {
    res.status(500)
    res.send('Cannot fetch dogs!')
  }
}

async function addDog(req, res) {
  try {

  } catch (error) {
    res.status(500)
    res.send('Unable to add dog!')
  }
}

module.exports = { getAll, addDog }
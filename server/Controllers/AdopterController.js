const { findById, findOne } = require('../Models/AdopterModel');
const adopter = require('../Models/AdopterModel');

async function create(req, res) {

  try {
    const user = await adopter.create(req.body)
    res.status(200)
    res.send({ id: user._id })
  } catch (error) {

    res.status(500)
    res.send(error)
  }
}

async function getAdopterInfo(req, res) {
  try {
    const { id } = req.params;
    const user = await adopter.findOne({ _id: id })
    res.status(200)
    res.send(user)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function updateAdopterDetails(req, res) {
  try {
    const { id } = req.params;
    const user = await adopter.findOneAndUpdate({ _id: id },
      req.body,
      { new: true }
    )
    res.status(200)
    res.send(user)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function getFavList(req, res) {
  try {
    const { id } = req.params;
    const user = await adopter.findById(id)
    res.status(200)
    res.send(user.favouritesList)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function addToFavourites(req, res) {
  try {
    const { id } = req.params;
    const { dogId } = req.body
    await adopter.updateOne({ _id: id },
      { $push: { favouritesList: dogId } })
    await adopter.updateOne({ _id: id },
      { $push: { dontShow: dogId } })
    const user = await adopter.findOne({ _id: id })
    res.status(200)
    res.send(user)
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

async function removeFromFavourites(req, res) {
  try {
    const { id } = req.params;
    const { dogId } = req.body
    await adopter.updateOne({ _id: id },
      { $pull: { favouritesList: dogId } })
    await adopter.updateOne({ _id: id },
      { $pull: { dontShow: dogId } })
    const user = await adopter.findOne({ _id: id })
    res.status(200)
    res.send(user)
  } catch (error) {

    res.status(500)
    res.send(error)
  }
}

async function dontShowInMatches(req, res) {
  try {
    const { id } = req.params;
    const { dogId } = req.body
    await adopter.updateOne({ _id: id },
      { $push: { dontShow: dogId } })
    const user = await adopter.findOne({ _id: id })
    res.status(200)
    res.send(user)
  } catch (error) {
    console.log(error)
    res.status(500)
    res.send(error)
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body
    const user = await adopter.findOne({ email: email })
    if (user.password === password) {
      res.status(200)
      res.send({ status: 'success', id: user.id })
    } else {

      res.status(404)
      res.send({ status: 'Please enter valid credentials' })
    }
  } catch (error) {
    res.status(500)
    res.send(error)
  }
}

module.exports = { create, getAdopterInfo, updateAdopterDetails, getFavList, addToFavourites, removeFromFavourites, dontShowInMatches, login }
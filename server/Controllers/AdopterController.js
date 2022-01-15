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

  }
}

module.exports = { create, getAdopterInfo, updateAdopterDetails }
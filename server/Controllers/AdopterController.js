const adopter = require('../Models/AdopterModel');

async function create(req, res) {
  console.log(req.body)
  try {
    const user = await adopter.create(req.body)
    res.status(200)
    res.send({ id: user._id })
  } catch (error) {

  }
}

module.exports = { create }
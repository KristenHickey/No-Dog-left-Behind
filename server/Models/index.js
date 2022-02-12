require('dotenv').config()
const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log('Database connected!')
}).catch(e => console.log('error', e));

const connection = mongoose.connection

module.exports = connection;
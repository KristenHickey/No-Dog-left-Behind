const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/No-Dog-Left-Behind').then(() => {
  console.log('Database connected!')
}).catch(e => console.log('error', e));

const connection = mongoose.connection

module.exports = connection;
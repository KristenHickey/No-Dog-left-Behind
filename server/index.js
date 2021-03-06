require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.SERVER_PORT;
const cors = require('cors');

const router = require('./router');
const connection = require('./Models/index')

app.use(cors());
app.use(express.json());
app.use(router);

(async function () {
  await connection;
  app.listen(PORT, () => {
    console.log('Server running on ', PORT)
  })
})()
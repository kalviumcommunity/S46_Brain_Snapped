const mongoose = require ('mongoose')
require('dotenv').config()
const express = require('express');
const app = express();
const port = 2000;

const dataBase = async () => {
    mongoose.connect(process.env.URI)
}
dataBase()

const isConnect = () => {1;
    return mongoose.connection.readyState === 1;
}

app.get('/', (req, res) => {
  res.json({ message: "Hello, I'm Snegan, currently studying in Kalvium!",
  database:isConnect()? "Connected to the Server.":"Disconnected from the server."
});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}.`);
});

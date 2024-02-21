const express = require('express');
const app = express();
const port = 2000;

app.get('/', (req, res) => {
  res.json({ message: "Hello, I'm Snegan, currently studying in Kalvium!"});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}.`);
});

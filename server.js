const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const userData = [
    {
      "username": "quirkyUser1",
      "userID": "12345",
      "snappedData": "Checking the fridge even though you just checked it five minutes ago."
    },
    {
      "username": "pensiveUser2",
      "userID": "67890",
      "snappedData": "Planning entire life paths at 3 am for careers you're completely unqualified for."
    },
    {
      "username": "techUser3",
      "userID": "13579",
      "snappedData": "Refreshing a webpage even though you know it won't magically update faster."
    },
    {
      "username": "sensoryUser4",
      "userID": "24680",
      "snappedData": "Smelling old books for that papery fragrance."
    },
    {
      "username": "socialUser5",
      "userID": "11223",
      "snappedData": "Laughing at your own jokes, even if they're not that funny."
    },
    {
      "username": "languageUser6",
      "userID": "33445",
      "snappedData": "Mumbling random words under your breath to see if they sound funny."
    },
    {
      "username": "quirkyUser7",
      "userID": "55667",
      "snappedData": "Talking to yourself, even if there's nobody else around."
    },
    {
      "username": "pensiveUser8",
      "userID": "77889",
      "snappedData": "Checking the dictionary definition of words you already know."
    },
    {
      "username": "techUser9",
      "userID": "99000",
      "snappedData": "Typing out entire phrases with emojis just for fun."
    },
    {
      "username": "sensoryUser10",
      "userID": "11221",
      "snappedData": "Running your fingers along smooth surfaces, like freshly painted walls or polished furniture."
    },
    {
      "username": "socialUser11",
      "userID": "33443",
      "snappedData": "Making funny faces at yourself in the mirror."
    },
    {
      "username": "languageUser12",
      "userID": "55665",
      "snappedData": "Repeating words over and over until they lose all meaning."
    }
  ];

  res.json({ message: "Hello, I'm Snegan, currently studying in Kalvium!", users: userData });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}.`);
});

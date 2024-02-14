const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); 

const Usermodel = require('./models/Users');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.get("/getData", (req, res) => {
  Usermodel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

const PORT = process.env.PORT || 5173; // Use the environment variable for the port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

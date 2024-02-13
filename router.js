const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 1000;

// Middleware to parse JSON bodies
app.use(express.json());

const dataBase = async () => {
    try {
        await mongoose.connect(process.env.URL);
        console.log('Connected to MongoDb');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
    }
};
dataBase();

const userSchema = new mongoose.Schema({
    username: String,
    userID: Number,
    snappedData: String,
});

const User = mongoose.model('userdatas', userSchema);


app.get('/get', async (req, res) => {
    try {
       const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/post", async(req, res) => {
    try {
        const newUser = req.body;
        const user = await User.create(newUser);
        res.status(201).json(user)
    } catch(err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

app.put("/put/:id", async(req, res) => {
    try {
        const userId = req.params.id;
        const updateUser = req.body; 
        const user = await User.findByIdAndUpdate(userId, updateUser, { new: true });
        res.json(user);
    } catch(err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

app.delete("/delete/:id", async(req, res) => {
    try {
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.sendStatus(204); 
    } catch(err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}.`);
});

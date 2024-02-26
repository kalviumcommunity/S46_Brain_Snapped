const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Joi = require('joi');
const Cookie = require('js-cookie')
const { loginSchema, userSchema } = require('./models/validateSchema.js');
const UserModal = require('./models/Users.js');
const LoginModal = require('./models/Login.js')

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Snegan29:snegan2914@cluster0.jqmpnkb.mongodb.net/Brain-Snapped?retryWrites=true&w=majority");

// Login validation for signup i.e, new users.


app.get('/logins', (req, res) => {
    LoginModal.find({})
        .then(logins => res.json(logins))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post("/users",(req, res)=> {
    const {error} = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    LoginModal.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
});


// Validation to check if the user has already logged in the account.

app.post('/users/signin',async(req,res) => {
    const {name , password} = req.body;
    const user = await LoginModal.findOne({name});
    if (!user){
        return res.status(401).send("Wrong Username")
    }
    const passwordValid = await user.comparePassword(password);
    if (!passwordValid){
        return res.status(401).send("Wrong Password")
    }
    res.send("Success")
})


// 4 API requests to create,update,edit and delete data in db.

app.get('/', (req, res) => {
    UserModal.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.get('/getNewUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById({_id: id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.post("/createUser", (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    UserModal.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
});

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndUpdate(id, {
        username: req.body.updatedUsername,
        snappedData: req.body.updatedSnappedData
    })
        .then(user => res.json(user))
        .catch(err => res.json(err))
});

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndDelete({_id: id})
        .then(user => res.json(user))
        .catch(err => res.json(err))
});





app.listen(3001, () => {
    console.log("server is running at http://localhost:3001")
});

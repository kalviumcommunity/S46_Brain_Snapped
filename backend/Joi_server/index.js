const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { loginSchema, userSchema } = require('./models/validateSchema.js');
const UserModal = require('./models/Users.js');
const LoginModal = require('./models/Login.js');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Snegan29:snegan2914@cluster0.jqmpnkb.mongodb.net/Brain-Snapped?retryWrites=true&w=majority");

// Generating tokens
const generateToken = (payload) => {
    return jwt.sign(payload, "secretcanbeasecret", { expiresIn: '1d' });
}

// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized: No token provided');
    }
    const authToken = token.split('Bearer ')[1];
    try {
        const decoded = jwt.verify(authToken, "secretcanbeasecret");
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).send('Forbidden: Invalid token');
    }
}

// Routes
app.get('/logins', (req, res) => {
    LoginModal.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/users',async(req,res) => {
    const {error , value} = loginSchema.validate(req.body);
    if (error){
        console.log(error);
        return res.send("Invalid Request")
    }
    const {name} = req.body;
    const user = await LoginModal.findOne({name});
    if (user){
        return res.status(401).send("This Username is already taken.")
    }
    const newUser = await LoginModal.create(req.body);
    const token = generateToken({password: newUser.password});
    res.json({token});
})


app.post('/users/signin',async(req,res) => {
    const {name , password} = req.body;
    const user = await LoginModal.findOne({name});
    if (!user){
        return res.status(401).send("Username Not Found")
    }
    const passwordValid = await user.comparePassword(password);
    if (!passwordValid){
        return res.status(401).send("Wrong Password")
    }
    const token = generateToken({password: user.password});
    res.json({token});
})


// 4 API requests.
app.get('/main', async (req, res) => {
    try {
        const randomThing = await UserModal.find();
        res.json(randomThing);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/main/getNewUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post("/main/createUser", (req, res) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    UserModal.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.put('/main/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndUpdate(id, {
        username: req.body.updatedUsername,
        snappedData: req.body.updatedSnappedData
    })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.delete('/main/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndDelete({ _id: id })
        .then(user => res.json(user))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("server is running at http://localhost:3001")
});

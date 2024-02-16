const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModal = require('./models/Users.js')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://Snegan29:snegan2914@cluster0.jqmpnkb.mongodb.net/Brain-Snapped?retryWrites=true&w=majority")

app.get('/',(req,res)=> {
    UserModal.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/getNewUser/:id',(req, res) => {
    const id = req.params.id;
    UserModal.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/createUser",(req, res) => {
    UserModal.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndUpdate(id, { 
        username: req.body.updatedUsername, 
        userId: req.body.updatedUserID, 
        snappedData: req.body.updatedSnappedData 
    })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModal.findByIdAndDelete({_id: id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001,()=> {
    console.log("server is running at http://localhost:3001")
})
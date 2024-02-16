const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:String,
    userID:Number,
    snappedData:String
})

const UserModal = mongoose.model("userdatas",UserSchema)
module.exports = UserModal
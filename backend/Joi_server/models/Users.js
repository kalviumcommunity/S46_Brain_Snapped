const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    snappedData: String
});


const UserModal = mongoose.model("userdatas", UserSchema);
module.exports = UserModal;


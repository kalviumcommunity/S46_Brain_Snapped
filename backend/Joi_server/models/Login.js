    const mongoose = require('mongoose');

    const LoginSchema = new mongoose.Schema({
        name:String,
        email:String,
        password:String,
    })

    LoginSchema.methods.comparePassword = function(password) {
        return this.password === password;
    };

    const LoginModal = mongoose.model("users",LoginSchema);
    module.exports = LoginModal;
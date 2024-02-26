const Joi = require('joi');

const loginSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

const userSchema = Joi.object({
    username: Joi.string().required(),
    snappedData: Joi.string().required()
});

module.exports = { loginSchema, userSchema };

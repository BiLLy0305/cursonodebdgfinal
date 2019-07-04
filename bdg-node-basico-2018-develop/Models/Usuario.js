

const Mongoose = require('mongoose');

const Schema = Mongoose.Schema;

const Usuario = new Schema({
    user: String,
    password: String
});

module.exports = Mongoose.model('Usuario', Usuario);
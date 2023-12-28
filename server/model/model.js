const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    firstName : {
        type : String,
        required: true,
        minLength: 3, 
        maxLength: 50
    },
    lastName : {
        type : String
    },
    username : {
        type : String,
        required: true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        minLength: 6
    },
    phone : {
        type: String,
        required: true,
        unique: true
    },
    country : {
        type: String,
        required: true
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
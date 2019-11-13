"use strict"

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name:String,
    surname:String,
    email:String,
    nick:String,
    password:String,
    role:String,
    image:String,
    birthdate:String
})

module.exports = mongoose.model('User', UserSchema)
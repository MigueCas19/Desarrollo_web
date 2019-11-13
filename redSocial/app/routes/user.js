'use strict'

var express = require("express");
var UserController = require("../controllers/user");

var api= express.Router();

//Definir rutas

api.get("/home", UserController.home);
api.get("/pruebas", UserController.pruebas);
api.post("/registration", UserController.saveUser);


module.exports =api;
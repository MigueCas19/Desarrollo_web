"use strict"

var express = require('express');
var bodyParser = require('body-parser');
var user_routes=require("./routes/user");

var app = express();

// Cargar Rutas

// app.post("/", (req, res) => {
//     console.log(req.body)
//     res.status(200).send({
//         message: "Feliz cumpleaños"
//     })
// })


// app.get("/pruebas", (req, res) => {
//     res.status(200).send({
//         message: "Enviado a pruebas"
//     })
// })





// Midelwares

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// CORS

// Rutas 
app.use("/api", user_routes)

// Export

module.exports = app;


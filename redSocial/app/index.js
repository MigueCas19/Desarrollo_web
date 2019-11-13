'use strict'

var mongose = require('mongoose');
var app = require('./app');
var port = 3800;

mongose.Promise = global.Promise

mongose.connect("mongodb://localhost:27017/redSocial", {userMongoClient:true})
    .then(()=> {
        console.log("La conexion fue exitosa por el puerto 27017 hola mundo nodemon")
        // Cargando el servidor
        app.listen(port, ()=> {
            console.log("Servidor web corriendo en el puerto 3800")
        })
    })
    .catch(err => console.log(err))
"use strict"
 

var jwt = require("jwt-simple")
var moment  =require("moment")
var secret = "s e c r e t"


function auth(req, res, next){
    if(!req.headers.auth){
        return res.status(403).send({
            message: "la aplicaion no tiene cabecera"
        })

    }

    var token = req.headers.auth.replace(/['"]+/g, "")

    try{
        var payload = jwt.encode(token, secret)
        if(payload.exp <= moment().unix()){
            return res.status(401).send("no autorizado")
        }

    }catch(ex){
        return res.status(500).send("error autenticacion")
    }

    req.user=payload
    next();1
    
}


module.exports={
    auth
}
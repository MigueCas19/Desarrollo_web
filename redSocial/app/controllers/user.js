'use strict'

var User = require("../models/user");
var bcrypt= require("bcrypt");

function home(req, res){
    res.status(200).send({
        message: "Bienvenido al home"
    })
}
function pruebas(req, res)
{
    res.status(200).send({
        message: "Hola a la ruta de pruebas"
    })

}

function saveUser(req, res){
    var params =  req.body;
    var user = new User();
    if(params.name && params.email && params.password&& params.nick){
        user.name=params.name;
        user.surname=params.surname;
        user.email=params.email;
        user.nick=params.nick;
        
        user.role=params.role;
        user.image=params.image;
        user.birthdate=params.birthdate;
        //Aquí haremos algo con el password
        bcrypt.hash(params.password, null, null, (err,hash)=>{
            user.password=hash;
            user.save((err, userStored)=> {
                if(err){return res.status(500).send("hubo un error al almacenar los datos");
                }
                if(userStored){
                    return res.status(200).send({user});
                }else{
                    return res.status(404).send("no funciono")
                }
            } );
        } )
  
    }else{
        return res.status(200).send("Incluye todos los datos pedidos")
    }
    res.status(200);
}

function login(req, res){
    var params=req.body;
    var email =  params.email;
    var password=params.password;

    User.findOne({email: email},(err, user)=>{
        if(err){return res.status(500).send("error al consultar en la base de datos")}
        if(user){
            bcrypt.compare(password, user.password, (err, check)=>{
                if(err){
                    return res.status(404).send("contraseña incorrecta")
                }else{
                    return res.status(200).send({user:user})
                }
            })

        }

    })
}

module.exports={home, pruebas, saveUser}
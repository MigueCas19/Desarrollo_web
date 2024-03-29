"use strict"

var jwt = require("jwt-simple")
var moment = require("moment")
var secret = "s e c r e t"

function createToken(user){
    var payload = {
        sub: user._id,
        name: user.name,
        surname: user.surname,
        nick: user.nick,
        email: user.email,
        iat: moment().unix(),
        exp: moment ("30", "days").unix()
    }

    return jwt.encode(payload, secret )
}


module.exports = { 
    createToken
}
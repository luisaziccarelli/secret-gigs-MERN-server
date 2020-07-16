const Token = require("../models/token")

const getTokenKey = function(req){
    // req.body.lives = req.body.lives
    return Token.findById(req.body.Body)
    // return Token.findById(req.body.Body)
}


const redeemToken = function(token){
    console.log("THIS IS UTILS",token)
    if (token.lives > 0){
        token.lives = token.lives -= 1
    }
    return Token.findByIdAndUpdate(token.id, token,{
    new: true,
    })
    
}

module.exports = {getTokenKey, redeemToken}
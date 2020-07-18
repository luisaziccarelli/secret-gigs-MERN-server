const Token = require("../models/token")

const getTokenKey = function(req){
    // req.body.lives = req.body.lives
    return Token.findById(req.body.Body)
    // return Token.findById(req.body.Body)
}

let lastTokenLife = 0

const redeemToken = function(token){
    console.log("THIS IS UTILS",token)
    if (token.lives === 0 && token.valid === true){
        token.valid = false
        return Token.findByIdAndUpdate(token.id, token,{
            new: true,
            })
    }
    if (token.lives > 0){
        token.lives = token.lives -= 1
        return Token.findByIdAndUpdate(token.id, token,{
            new: true,
            })
        }
    if (token.lives === 0 && token.valid === false){
        return Token.findById(token)
    }
}

module.exports = {getTokenKey, redeemToken}
const Token = require("../models/token")

const getTokenById = function(req){
    // req.body.lives = req.body.lives
    return Token.findById(req.body.Body)
    // return Token.findById(req.body.Body)
}


const updateToken = function(req){
    if (req.lives > 0){
        req.lives = req.lives -= 1
    }
    return Token.findByIdAndUpdate(req.id, req,{
    new: true,
    })
    
}

module.exports = {getTokenById, updateToken}
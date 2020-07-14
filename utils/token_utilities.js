const Token = require("../models/token")

const getTokenById = function(req){
    return Token.findByIdAndUpdate(req.body.Body, {
        new: true,
        lives: 0
    })
    // return Token.findById(req.body.Body)
}

module.exports = {getTokenById}
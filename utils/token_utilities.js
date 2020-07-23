const Token = require("../models/token")
const User = require("../models/user")

const getTokenKey = function(req){
    // req.body.lives = req.body.lives
    return Token.findById(req.body.Body)
    // return Token.findById(req.body.Body)
}

let lastTokenLife = 0

const redeemToken = function(token){
    console.log("THIS IS UTILS",token)
    //this is for the token's last usage
    if (token.lives === 0 && token.valid === true){
        token.valid = false

        return Token.findByIdAndUpdate(token.id, token,{
            new: true,
            })
    }
    // this is to deduct a life out of the token each time it's used
    if (token.lives > 0){
        token.lives = token.lives -= 1
        // req.body.From

        return Token.findByIdAndUpdate(token.id, token,{
            new: true,
            })
        }
    // this is to not update if the token has expired
    if (token.lives === 0 && token.valid === false){
        return Token.findById(token)
    }
}

const acceptUser = function(token){
    // let hasToken = await Token.find({"usedByPhone": `${phone.body.From}`})
    // let user = await User.find({"phoneNumber": `${phone.body.From}`})


    // let event = await Event.find({"applicants.phoneNumber":`${token.body.From}`})
    // event.applicants.push({phoneNumber: token.body.From, accepted: true})
    // event.save()


    // if (event !== undefined){

    //     console.log(req)
    //     let userDetails = {
    //         username: req.user.username,
    //         phoneNumber: req.body.From,
    //     }
    //     token.usedByPhone.push(userDetails)
    //     token.save()
    // }


}

module.exports = {getTokenKey, redeemToken}
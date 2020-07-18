const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { getTokenKey, redeemToken } = require('../utils/token_utilities');
const { update } = require('../models/user');
const token = require('../models/token');

const getResponseAndUpdate = function (req, res) {
    const twiml = new MessagingResponse()
    
    getTokenKey(req).exec((err, token) => {
        console.log("BODY!!!",req.body)
        let phoneNumber = req.body.From
        console.log("PHONE!!!", phoneNumber)
        if (err) {

            twiml.message(
                'Something went wrong, we cannot find this token'
            )

            res.writeHead(200, { 'Content-Type': 'text/xml' });
            return res.end(twiml.toString());
        }
        redeemToken(token).exec((err, token) => {
            if (err) {
                res.status(500)
                return res.json({
                    error: err.message
                })
            }
            console.log(token.lives, "TOKEN LIVES!!!!!!!")
            if (token.valid === true){
                twiml.message(
                    `You have redeemed the token ${token._id}, ${token.lives} usages left`
                )
            }else if (token.valid === false){
                twiml.message(
                    `Token ${token._id}, has no further usages left`
                )
            }
    
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());
        })

    })
}

const getToken = function (req, res) {
    getTokenKey(req).exec((err, token) => {
        if (err) {
            res.status(500)
            return res.json({
                error: err.message
            })
        }
        res.json(token)
    })
}

module.exports = { getResponseAndUpdate, getToken }
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const { getTokenById, updateToken } = require('../utils/token_utilities');
const { update } = require('../models/user');
const token = require('../models/token');
// const twiml = new MessagingResponse();


const getResponse = function (req, res) {
    const twiml = new MessagingResponse()

    getTokenById(req).exec((err, token) => {
        if (err) {

            twiml.message(
                'Something went wrong, we cannot find this token'
            )

            res.writeHead(404, { 'Content-Type': 'text/xml' });
            return res.end(twiml.toString());
        }
        // res.json(token)
        updateToken(token).exec((err, token) => {
            if (err) {

            }
            return token
        })
        twiml.message(
            `You have redeemed the ${token}`
        )

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(twiml.toString());
    })
}



const getToken = function (req, res) {
    getTokenById(req).exec((err, token) => {
        if (err) {
            res.sendStatus(404)
            return res.send("Token not found")
        }
        res.json(token)
    })
}

module.exports = { getResponse, getToken }
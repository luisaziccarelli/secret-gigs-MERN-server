const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {getTokenById} = require('../utils/token_utilities')


const getResponse = function (req, res) {
    const twiml = new MessagingResponse()
    
    getTokenById(req).exec((err,token) => {
        if (err){

            twiml.message(
                'Something went wrong, we cannot find this token'
              )
          
            res.writeHead(200, { 'Content-Type': 'text/xml' });
           return res.end(twiml.toString());
        }
        twiml.message(
            'You have redeemed the token'
          )
        
          res.writeHead(200, { 'Content-Type': 'text/xml' });
          res.end(twiml.toString());
        })}


const getToken = function(req,res){
    getTokenById(req).exec((err,token) => {
        if (err){
            res.status(404)
            return res.send("Token not found")
        }
        res.send(token)
    })
}

module.exports = {getResponse, getToken}
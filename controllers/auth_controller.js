const passport = require("passport")
const User = require("../models/user")

//register a user
const register = function (req, res) {
    User.register(new User({
        username: req.body.username,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber
    }), req.body.password, function (err) {
        if (err) {
            res.status(500)
            res.json({error: err})
        } else {
            // Log in the newly registered user
            passport.authenticate('local')(req, res, function () {
                res.json(req.user)
            })
        }
    })
}

module.exports = { register }
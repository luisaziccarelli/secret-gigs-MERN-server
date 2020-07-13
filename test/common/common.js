const mongoose = require('mongoose')

const dbConn = 'mongodb://localhost/secret_gigs_test'

function connectToDb(done) {mongoose.connect(
    dbConn,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    }, 
    err => {
        if (err){
            console.log("error connecting database", err)
            done()
        } else{
            console.log("Connected to SG Database!")
            done()
        }
    }
)}

module.exports = {connectToDb}
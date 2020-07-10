const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")

// Sets port if deploying to external provider 
// or port assigned already
const port = process.env.PORT || 3002;

// Equivalent of create server in http library
const app = express();

// Call the middleware we want to use
app.use(cors());
app.use(bodyParser.json());

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }


// Connect to database

const dbConn = process.env.MONGODB_URI || 'mongodb://localhost/secret_gigs';

mongoose.connect(
    dbConn,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    }, 
    err => {
        if (err){
            console.log("error connecting database", err)
        } else{
            console.log("Connected to SG Database!")
        }
    }
)

// Define a simple route for GET
app.get("/",(req,res) => {
    res.send("Express server running")
});

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`));
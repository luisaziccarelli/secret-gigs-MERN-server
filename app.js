const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Sets port if deploying to external provider 
// or port assigned already
const port = process.env.port || 3002;

// Equivalent of create server in http library
const app = express();

// Call the middleware we want to use
app.use(cors());
app.use(bodyParser.json());

// Define a simple route for GET
app.get("/",(req,res) => {
    res.send("Express server running")
});

// Listen
app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express")
const router = express.Router()
const {getResponse, getToken, getResponseAndUpdate} = require("../controllers/token_controller")

router.post("/", getResponseAndUpdate)

router.get("/get", getToken)

module.exports = router
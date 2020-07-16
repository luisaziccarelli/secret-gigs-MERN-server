const express = require("express")
const router = express.Router()
const {getToken, getResponseAndUpdate} = require("../controllers/token_controller")

router.post("/", getResponseAndUpdate)

router.get("/get", getToken)

module.exports = router
const express = require("express")
const router = express.Router()
const {getResponse, getToken} = require("../controllers/token_controller")

router.post("/", getResponse)

router.get("/get", getToken)

module.exports = router
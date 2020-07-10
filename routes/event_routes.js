const express = require("express")
const router = express.Router()
const {getEvents} = require("../controllers/event_controllers")

// READ
router.get("/", getEvents)

module.exports = router;
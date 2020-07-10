const express = require("express")
const router = express.Router()
const {getEvents, postEvent} = require("../controllers/event_controllers")

// READ
router.get("/", getEvents)

//POST
router.post("/", postEvent)

module.exports = router;
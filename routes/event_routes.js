const express = require("express")
const router = express.Router()
const {
    getEvents, 
    postEvent, 
    getEvent, 
    modifyEvent, 
    removeEvent,
    applyToEvent,
    userAuthenticated

} = require("../controllers/event_controllers")

//After this require login
router.use(userAuthenticated)

// READ
router.get("/", getEvents)

//READ
router.get("/:id", getEvent)

// CREATE
router.post("/", postEvent)

// //UPDATE
router.put("/:id", modifyEvent)

//DELETE
router.delete("/:id", removeEvent)

//UPDATE
router.put("/:id/apply", applyToEvent)

module.exports = router;
const Event = require("../models/events")

const getAllEvents = function(){
    return Event.find()
}

module.exports = {getAllEvents}
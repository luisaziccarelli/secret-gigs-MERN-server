const Event = require("../models/events")

const getAllEvents = function(){
    return Event.find()
}

const addEvent = function(body){
    return new Event(body)
}

module.exports = {getAllEvents, addEvent}
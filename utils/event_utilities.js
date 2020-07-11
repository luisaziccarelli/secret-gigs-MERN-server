const Event = require("../models/events")

const getAllEvents = function(){
    return Event.find()
}

const addEvent = function(body){
    return new Event(body)
}

const getEventById = function(id){
    return Event.findById(id)
}

const updateEvent = function(req){
    return Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
}

const deleteEvent = function(id){
    return Event.findByIdAndRemove(id)
}

module.exports = {getAllEvents, addEvent, getEventById, updateEvent, deleteEvent}
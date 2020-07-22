const Event = require("../models/event")
const User = require("../models/user")
const { ObjectID } = require('mongodb');


const getAllEvents = function(req){
    return Event.find()
}

const addEvent = function(req){
    return new Event(req.body)
}

const getEventById = function(req){
    return Event.findById(req.params.id)
}

const updateEvent = function(req){
    return Event.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
}

const deleteEvent = function(req){
    return Event.findByIdAndRemove(req.params.id)
}

const updateApplyToEvent = async (req) => {
    let event = await Event.findById(req.params.id)
    console.log("EVENT!",event)
    // let user = await User.find({
    //     "username":`${req.body.username}`
    // })


    let foundMatches = await Event.find({
        "_id": ObjectID(`${event.id}`),
        "applicants": { "username": `${req.user.username}`,"phoneNumber": `${req.user.phoneNumber}`, "accepted": false }
    })
    console.log(`FOUND! ${req.user.username}`,foundMatches[0])

    if (foundMatches[0] === undefined /*&& user[0] !== undefined*/) {
        let newApplication = {
            username: req.user.username,
            phoneNumber: req.user.phoneNumber,
            accepted: false
        }
        let newEventAppliedTo = {
            eventId: event.id
        }
        event.applicants.push(newApplication)
        
        // refactor
        // if (user[0] !== undefined){
        //     user[0].eventsApplied.push(newEventAppliedTo)
        //     return User.findByIdAndUpdate(user[0].id, user[0], {
        //     new: true
        //     })
        // }

        return Event.findByIdAndUpdate(req.params.id, event, {
            new: true
        })


    } else {
        return Event.findById(req.params.id)
    }

}


module.exports = {
    getAllEvents, 
    addEvent, 
    getEventById, 
    updateEvent, 
    deleteEvent,
    updateApplyToEvent
}
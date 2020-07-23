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

const chooseRandomUsers = async (req) => {
    let event = await Event.findById(req.params.id)
    // /:id/choose
    console.log("THIS IS THE EVENT!!!!",event)
    console.log(event.applicants)
    event.applicants

    let acceptedUsers = [];
    // let indexResults = []
    // let index = null
    
    // for (let i = 0; (i < 5 && (indexResults.includes(index) === false )); i++) {
    //     console.log("INDEX RESULTS",indexResults.includes(index))
    //     index = Math.floor(Math.random() * event.applicants.length)
    //     let randomUser = event.applicants[index];
    //     indexResults.push(index)
    //     console.log(indexResults)
    //   // Since we are only removing one element
    //   acceptedUsers.push(randomUser);
    // }
    // console.log(indexResults)
    // console.log("acceptedUsers",acceptedUsers)
    // return acceptedUsers;  

    let limit = event.capacity,
    amount = 5,
    lowerBound = 1,
    upperBound = event.applicants.length,
    uniqueRandomIndex = []

if (amount < limit) limit = amount; //Infinite loop if you want more unique
                                    //Natural numbers than exist in a
                                    // given range
while (uniqueRandomIndex.length < limit) {
    let index = Math.floor(Math.random()*(upperBound - lowerBound) + lowerBound);
    if (uniqueRandomIndex.indexOf(index) == -1) { 
        let randomUser = event.applicants[index];
        acceptedUsers.push(randomUser);
        uniqueRandomIndex.push( index );
        console.log(uniqueRandomIndex)
        console.log(acceptedUsers)
        
    }

}
return Event.findByIdAndUpdate(req.params.id, acceptedUsers, {
    new: true
})



    // const randomElement = array[Math.floor(Math.random() * array.length)];

    //
    // return Event.findByIdAndUpdate(req.params.id, req.body, {
    //     new: true
    // })
}


module.exports = {
    getAllEvents, 
    addEvent, 
    getEventById, 
    updateEvent, 
    deleteEvent,
    updateApplyToEvent,
    chooseRandomUsers
}
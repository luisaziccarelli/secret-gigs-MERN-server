const {getAllEvents, addEvent} = require("../utils/event_utilities")

const getEvents = function(req,res){
    getAllEvents().exec((err,events) => {
        if(err){
            res.status(500)
            return res.json({
                error:err.message
            })
        }
        res.send(events)
    }
    )
}

const postEvent = function(req,res){
    addEvent(req.body).save((err,event)=>{
        if(err){
            res.status(500)
            res.json({
                error: err.message
            })
        }
        res.status(201)
        res.send(event)
    }
    )
}

module.exports = {getEvents, postEvent}
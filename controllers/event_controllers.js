const {getAllEvents} = require("../utils/event_utilities")

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

module.exports = {getEvents}
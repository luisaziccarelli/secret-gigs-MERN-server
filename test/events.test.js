const mongoose = require('mongoose')
const expect = require("expect")
const Event = require("../models/events")
const {
    getAllEvents, 
    addEvent, 
    getEventById, 
    updateEvent, 
    deleteEvent} = require("../utils/event_utilities")

const dbConn = 'mongodb://localhost/secret_gigs_test'

function connectToDb(done) {mongoose.connect(
    dbConn,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    }, 
    err => {
        if (err){
            console.log("error connecting database", err)
            done()
        } else{
            console.log("Connected to SG Database!")
            done()
        }
    }
)}

before(done => {
    connectToDb(done)
  });

after(done => {
    mongoose.disconnect(done)})

let eventId = null

beforeEach( async () => {

    // Set and load data from test data file
    await Event.deleteMany()
    let testEvent = await setupData()
    eventId = testEvent._id

})



describe("getAllEvents with one post", () => {
	it("should get a post if one exists", () => {
        getAllEvents().exec((err,event) =>{
            expect(Object.keys(event).length).toBe(1)
        })
        // Pass an empty req object
		
	})
	it("name of first event should be tester", () => {
        getAllEvents().exec((err,event) => {
            expect(event[0].name).toBe("tester")
        })
		
	})
})



// describe("getEventById", () => {
// 	// Define a req object with the expected structure to pass a parameter
// 	const req = {
// 		params: {
// 			_id: eventId
// 		}
// 	}
// 	it("user of post with id 1 should be tester", () => {
//         getEventById(req).exec((err,event) => {
// 		expect(event.name).toBe("tester")})
// 	})
// })

// Setup and tear down functions
function setupData() {
	let testEvent = {}
	testEvent.name = "tester"
	testEvent.date = "tester"
	testEvent.generalLocation = "tester"
	testEvent.specificLocation = "tester"
	testEvent.capacity = 10
    
    return Event.create(testEvent)
}
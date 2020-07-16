const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Token = new Schema ({
    valid:{
        type: Boolean,
        default: true
    },
    lives:{
        type: Number,
        required: true,
    },
    phone:{
        type: Array
    }

})

module.exports = mongoose.model("Token",Token)



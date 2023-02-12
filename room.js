// a model.js file that gives us the structure of how we want the database to look like 
const mongoose = require('mongoose')

// Schema here defines the structure of the document
const Schema = mongoose.Schema
const roomSchema = new Schema({
    name: {
      type: String,
      required: true,  
    },
    roomType: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, {timestamps: true});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;



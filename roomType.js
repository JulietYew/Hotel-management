const mongoose = require('mongoose')

const Schema = mongoose.Schema
const roomTypeSchema = new Schema({
  name: {
    type: String,
    required: true,  
  },

}, {timestamps: true});


const RoomType = mongoose.model('RoomType', roomTypeSchema);
module.exports = RoomType;

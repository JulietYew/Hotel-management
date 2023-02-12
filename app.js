const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const constants = require('./constants')
const database = require('./database')
const dotenv = require('dotenv')
dotenv.config();


const ControllerRoom = require('./controller_room')
const ControllerRoomType = require('./controller_roomtype')
const { MESSAGES } = constants

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000;

//base API for room types 

app.get("/", (req, res) => {
   res.status(200).send({message: MESSAGES.FETCHED, success: true});

});

// fetch all room types
app.get("/api/v1/room-types", async(req, res) =>{
    try {
       const roomTypes = await ControllerRoomType.getAllRoomTypes();
       res.status(200).send({message: MESSAGES.FETCHED, success: true, data:roomTypes });

}       catch(err){
        res
          .status(404)
          .send({message: MESSAGES.ERROR || err.message, success: false})
}

});

//base API for rooms 
app.get("/", (req, res) => {
    res.status(200).send({message: MESSAGES.FETCHED, success: true});
})

// fetch all rooms
app.get("/api/v1/rooms", async(req, res) =>{
    try {
       const rooms = await ControllerRoom.getAllRoom();
       res.status(200).send({message: MESSAGES.FETCHED, success: true, data:rooms });

}       catch(err){
        res
          .status(404)
          .send({message: err.message || MESSAGES.ERROR , success: false});
}

});

// edit a room using its id and using PATCH HTTP request method
app.patch("/api/v1/rooms/:id", async(req, res) =>{
    try {
       const data = req.param;
       const body = req.body;

       const {id} = await ControllerRoom.editRoomById(id, body);
       res.status(200).send({message: MESSAGES.UPDATED, success: true, data });

}       catch(err){
        res
          .status(404)
          .send({message: err.message || MESSAGES.ERROR , success: false})
}

});


//fetching a single room using its id
app.get("/api/v1/rooms/:id", async(req, res) =>{
    try {
       const {id} = req.param;
       const data = await ControllerRoom.getRoomById(id);
       res.status(200).send({message: MESSAGES.FETCHED, success: true, data });

}      catch(err){
       res
         .status(404)
         .send({message: err.message || MESSAGES.ERROR , success: false})
}

});

// delete a room using its id and using DELETE HTTP request method

app.delete("/api/v1/rooms/:id", async (req, res) => {
    try{
        const {id} = req.param;
        const data = await ControllerRoom.deleteRoomById(id)
        res.status(200).send({message: MESSAGES.DELETED, success: true, data });

}      catch(err){
       res
         .status(404)
         .send({message: err.message || MESSAGES.ERROR , success: false})
}

});
app.listen(PORT, () =>{
    database();
    console.log(`Server started on port ${PORT}`)
});
module.exports = app;

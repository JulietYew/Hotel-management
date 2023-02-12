// a collection for the room
const Room = require('./room');

class ControllerRoom {
    async getAllRoom (){
       return await Room.find({} , "__v" )

    }
    async editRoomById (id, data){
        return await Room.findOne({_id:id}, data);

    }

    async deleteRoomById (id){
        return await Room.delete({_id:id});
    }

    async getRoomById (id) {
        return await Room.findOne({_id:id});
    }

}

module.exports = new ControllerRoom();
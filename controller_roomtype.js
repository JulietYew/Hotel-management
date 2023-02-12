// a collection for room type
const RoomType = require('./roomType');

class ControllerRoomType {
    async getAllRoomTypes (){
       return await RoomType.find({} , "__v" )
    }

}
module.exports = new ControllerRoomType();
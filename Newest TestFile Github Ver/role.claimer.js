module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        // if in target room
        const route = Game.map.findRoute(creep.room, creep.memory.target);
        if(route.length > 0) {
            console.log('Now heading to room '+route[0].room);
            const exit = creep.pos.findClosestByRange(route[0].exit);
            creep.moveTo(exit, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        else {
            if (creep.room.name == creep.memory.target) {
            }
            // try to claim controller
            if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // move towards the controller
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        } 
    }
};
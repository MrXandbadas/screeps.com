
module.exports = {
    // a function to run the logic for this role
    run: function (creep) {
        let structure;
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
            
        }
                  // rincreepenergyfinder
            
        // if creep is harvesting energy but is full
        else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.working = true;
            
        }

        
        if(!creep.memory.currentRoom) {
            creep.memory.currentRoom = creep.room.name;
        }
        if(!creep.memory.target) {
            creep.memory.target = creep.room.name;
        }
        // if creep is supposed to transfer energy to a structure
        if (creep.memory.working == true) {


// if in home room
            if (creep.memory.currentRoom == creep.memory.target) {
                
            // try to upgrade the controller
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // if not in range, move towards the controller
                creep.moveTo(creep.room.controller);
            }
        } else if (creep.room.name != creep.memory.target) {
                // find exit to home room
                var exit = creep.room.findExitTo(creep.memory.target);
                // and move to exit
                creep.moveTo(creep.pos.findClosestByRange(exit));
            } else if (!creep.memory.target) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    // if not in range, move towards the controller
                    creep.moveTo(creep.room.controller);
                }
            }
            // if creep is supposed to harvest energy from source
        if (creep.room.name == creep.memory.target) {

              
                

        }
        }  else if (creep.memory.working == false) {
            var target = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

        // try to harvest energy, if the source is not in range
        if (creep.harvest(target) == ERR_NOT_IN_RANGE) {
            // move towards the source
            creep.moveTo(target);
            
        }
        }
        

        
        

        
    }
};
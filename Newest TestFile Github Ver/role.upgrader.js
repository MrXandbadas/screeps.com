module.exports = {

    run: function (creep) {
    
        
        if (creep.memory.jobTask[0].harvestingSource == 'true' && creep.carry.energy == creep.carryCapacity) {
    
            creep.memory.jobTask[0].harvestingSource = 'false';
            creep.memory.jobTask[1].upgradingAttempt = 'true';
        }
    
        else if (creep.memory.jobTask[1].upgradingAttempt == 'true' && creep.carry.energy == 0) {
    
     
            creep.memory.jobTask[0].harvestingSource = 'true';
            creep.memory.jobTask[1].upgradingAttempt = 'false';
        }
    
        if (creep.memory.jobTask[0].harvestingSource == 'true') {
            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    
           if (creep.memory.jobTask.harvestingSourceID == undefined) {
     
               creep.memory.jobTask.harvestingSourceID = source.id;
     
           }
    
             if (creep.memory.jobTask.harvestingSourceID != undefined) {

                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        const path = creep.pos.findPathTo(source);
                        creep.memory.path = path;
                        Memory.path = Room.serializePath(path);
                        creep.moveByPath(Memory.path);
                        
            }
            }
           
        }
        if (creep.memory.jobTask[1].upgradingAttempt == 'true' ) {


            if (creep.memory.jobTask[1].upgradingSourceID == undefined) {
                creep.memory.jobTask[1].upgradingSourceID = creep.room.controller.id;
            }

            if (creep.memory.jobTask[1].upgradingSourceID != undefined) {

            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            const path = creep.pos.findPathTo(creep.room.controller);
             creep.memory.path = path;
            Memory.path = Room.serializePath(path);
            creep.moveByPath(Memory.path);
                    
        }
    }
        }
           
        }
    
    
    
        
    
    
    
    };
    
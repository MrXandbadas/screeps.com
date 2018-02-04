var roleUpgrader = require('role.upgrader');
var creepFnc = require('prototype.creep');


module.exports = {


    // a function to run the logic for this role
    run: function (creep) {
        let container;
        if (creep.room.name != creep.memory.target) {

        const route = Game.map.findRoute(creep.room, creep.memory.target);
        if(route.length > 0 && creep.memory.target != creep.room.name) {
           // console.log('Now heading to room '+route[0].room);
            const exit = creep.pos.findClosestByRange(route[0].exit);
            creep.moveTo(exit);
        }
    } else if (creep.memory.target == creep.room.name) {

        if (creep.memory.working == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.working = false;
            
        }
        
                
                
        
                
                
                // if creep is harvesting energy but is full
                else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
                    // switch state
                    creep.memory.working = true;
                }
        
        
        
        //creepFnc.pickupDropped(creep);
        if (!creep.memory.working) {
            creep.memory.working = false;
        }

// if creep is trying to complete a constructionSite but has no energy left 
        if (creep.memory.working == false) {
            creepFnc.harvestSource(creep);
            
        }
        else if (creep.memory.working == true) {
            creepFnc.builderThenRepair(creep);
            
        }
    }

        // if creep is supposed to complete a constructionSite
        /*if (creep.memory.working == true && creep.memory.target == creep.room.name) {
            // find closest constructionSite
            // if one is found
            



       if (!container != undefined) {
            
            const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
            if(creep.carry.energy == 0) {
                
                    
                    
            
            } else if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                    let container = target;
                    }
                else if (creep.room.storage != undefined){
                    if (creep.room.storage.store[RESOURCE_ENERGY] >= 200) {
                // replenish the storage!
             
             let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 50
            });
                        
            
                        // if one was found
                        
                        if (container != undefined) {
                            // try to withdraw energy, if the container is not in range
                            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                                // move towards it
                                creep.moveTo(container);
                            }
                        }
                    }
                } else {
                    container = creep.room.storage;
                    if (container != undefined) {
                        // try to withdraw energy, if the container is not in range
                        if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            // move towards it
                            creep.moveTo(container);
                        }
                    }
                }    
                } 

    
        // if creep is supposed to harvest energy from source

            

            
        } */
    }

    };
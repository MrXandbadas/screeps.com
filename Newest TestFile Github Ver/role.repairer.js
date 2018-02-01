
var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
    
// tell repairing to not happen when 0 energy capacity 
    if(!creep.memory.repairing && creep.carry.energy == 0 || creep.memory.repairing == true && creep.carry.energy == 0 ) {
            creep.memory.repairing = false;
            creep.say('Need to get Energy', true);
        }
// Tell repairing to happen when capacity is full
        if(creep.carry.energy == creep.carryCapacity) {
            creep.memory.repairing = true;
            creep.say('Can i Fix you?', true);
        }
// Check if repairing is set to true or not. if true repair 
           if (creep.memory.repairing == true) {
// find closest structure with less than max hits
// Exclude walls because they have way too many max hits and would keep
// our repairers busy forever. We have to find a solution for that later.
            var structure = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL
            });
// if we find one

            if (structure != undefined) {
                // try to repair it, if it is out of range
                if (creep.repair(structure) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
            // if we can't find one
            else {
                // look for construction sites
                roleBuilder.run(creep);
            }   
            
    }
    else if (!creep.memory.repairing == true) {
        
        let creepQuick = require('prototype.creep');
        creepQuick.energyCollection(creep);
        
    } else {
        var container = creep.pos.findClosestByPath(FIND_SOURCES);
            // try to harvest energy, if the source is not in range
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                // move towards the source
                creep.moveTo(source);
                }
            }
        
    
        }    
};

module.exports = roleRepairer;

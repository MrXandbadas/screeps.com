var creepFnc = require('prototype.creep');
module.exports = {
    // a function to run the logic for this role
    /* @param {Creep} creep */
    run: function (creep) {

        if (!creep.memory.delivery) {
            creep.memory.delivery = false;
        }
        // if creep is bringing energy to a structure but has no energy left
        if (creep.memory.delivery == true && creep.carry.energy == 0) {
            // switch state
            creep.memory.delivery = false;
        }
        // if creep is harvesting energy but is full
        else if (creep.memory.delivery == false && creep.carry.energy == creep.carryCapacity) {
            // switch state
            creep.memory.delivery = true;
        }

        // if creep is supposed to transfer energy to a structure
        if (creep.memory.delivery == true) {
            // find closest spawn, extension or tower which is not full
            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_EXTENSION
                    || s.structureType == STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });

            if (structure == undefined) {
                structure = creep.room.storage;
            }

            // if we found one
            if (structure != undefined) {
                // try to transfer energy, if it is not in range
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // move towards it
                    creep.moveTo(structure);
                }
            }
        }
        // if creep is supposed to get energy
        else if (creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0
                }) == undefined) {

                creepFnc.pickupDropped(creep);
                }
                else  {
                    creepFnc.energyCollection(creep);
                }
            
           










        }
};
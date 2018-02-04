


module.exports = {

    roleCall: function(creep) {
//calling roleName and its index for its role

var creepRole = creep.memory.role;

    if (creepRole == 'harvester') {
        let roleHarvester = require('role.harvester');

       return roleHarvester.run(creep);
    }
    else if (creepRole == 'upgrader') {
        let roleUpgrader = require('role.upgrader');
       return roleUpgrader.run(creep);
    }
    else if (creepRole == 'builder') {
        let roleBuilder = require('role.builder');
        return roleBuilder.run(creep);
    }
    else if (creepRole == 'repairer') {
        let roleRepairer = require('role.repairer');
        return roleRepairer.run(creep);
    }
    else if (creepRole == 'wallRepairer') {
        let roleWallRepairer = require('role.wallRepairer');
        return roleWallRepairer.run(creep);
    }
    else if (creepRole == 'longDistance'){
        let roleLongDistanceHarvester = require('role.longDistanceHarvester');
        return roleLongDistanceHarvester.run(creep)
    }
    else if (creepRole == 'miner') {
        let roleMiner = require('role.miner');
       return roleMiner.run(creep);
    }
    else if (creepRole == 'claimer') {
    
        let roleclaimer = require('role.claimer');
        return roleclaimer.run(creep);
    }
    else if (creepRole == 'delivery') {
        let roleDelivery = require('role.delivery');
        return roleDelivery.run(creep);
    }

    }, //end of rolecall function


    energyCollection: function(creep)  {
        let container = creep.pos.findClosestByPath(FIND_STRUCTURES, {
            filter: s => s.structureType == STRUCTURE_CONTAINER && s.store[RESOURCE_ENERGY] > 0
        });

        if (container == undefined) {
            container = creep.room.storage;
        }

        // if one was found
        if (container != undefined) {
            // try to withdraw energy, if the container is not in range
            if (creep.withdraw(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // move towards it
                creep.moveTo(container);
            }
        }


    },

       DelivPick: (creep) =>  { 
            if (creep.memory.working == true) {
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
                if (structure != undefined) {
                    
                    // try to transfer energy, if it is not in range
                    if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        // move towards it
                       return creep.moveTo(structure);
                    }
                }
                else if (!creep.memory.working == true){
                    // find closest source
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                    // try to harvest energy, if the source is not in range
                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        // move towards the source
                        creep.moveTo(source);
                    }
        
                
                }
        
        }
    
    },

    pickupDropped: (creep) => {

        
        
        const target = creep.pos.findClosestByRange(FIND_DROPPED_RESOURCES);
           /* if(creep.carry.energy == 0) {
                
                    var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                        // try to harvest energy, if the source is not in range
                        if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                            // move towards the source
                            creep.moveTo(source);}
                    
            
            }*/ if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(target);
                creep.memory.path = path;
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);
                    }
                


    },
    harvestSource: (creep) => {

        
        
        var source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        // try to harvest energy, if the source is not in range                    
            
             if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
               
                creep.moveTo(source);
                    }
                


    },
    builderThenRepair : (creep) => {
        var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
            
        if (constructionSite != undefined) {
            // try to build, if the constructionSite is not in range
            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                // move towards the constructionSite
                creep.moveTo(constructionSite);
            }
        }
        // if no constructionSite is found
        else {
            // go upgrading the controller
            let roleUpgrader = require('role.upgrader');
            roleUpgrader.run(creep);
        }
    }
            

    

};

    roleRun = (creep) => {
        
        var creepRole = creep.memory.role

        if (creepRole == 'harvester') {
            
            let harvesterRole = require('role.harvester');
            
           return harvesterRole.run(creep); 

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
    
        }





    module.exports = roleRun;

    
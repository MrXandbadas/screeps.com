


module.exports = {

    roleCall: function(creep, roleName) {
//calling roleName and its index for its role

var creepRole = creep.memory.role;
roleName = [];
roleName.push('harvester', 'repairer', 'wallRepairer', 'builder', 'upgrader','delivery', 'miner');
console.log(JSON.stringify(roleName));
    if (creepRole == roleName[0]) {
        let roleHarvester = require('role.harvester');
        roleHarvester.run(creep);
        console.log('harvester');
    }
    else if (creepRole == roleName[4]) {
        let roleUpgrader = require('role.upgrader')
        roleUpgrader.run(creep);
    }
    else if (creepRole == roleName[3]) {
        let roleBuilder = require('role.builder')
        roleBuilder.run(creep);
    }
    else if (creepRole == roleName[1]) {
        let roleRepairer = require('role.repairer')
        roleRepairer.run(creep);
    }
    else if (creepRole == roleName[2]) {
        let roleWallRepairer
        roleWallRepairer.run(creep);
    }
    /*else if (creepRole == halp*//*){
        let roleLoneDistanceHarvester = require('role.longdistanceharvester');
        roleLongDistanceHarvester.run(creep)
    }*/
    else if (creepRole == roleName[6]) {
        let roleMiner = require('role.miner')
        roleMiner.run(creep);
    }
    else if (creepRole == 'claimer') {
        let roleclaimer = require('role.claimer')
        roleclaimer.run(creep);
    }
    else if (creepRole == roleName[5]) {
        let roleDelivery = require('role.delivery')
        roleDelivery.run(creep);
    }

    } //end of rolecall function

}



module.exports = {

    roleCall: function(creep, roleName, ab) {
//calling roleName and its index for its role

var creepRole = creep.memory.role;

    if (creepRole == 'harvester') {
        let roleHarvester = require('role.harvester');
        roleHarvester.run(creep);
    }
    else if (creepRole == 'upgrader') {
        let roleUpgrader = require('role.upgrader');
        roleUpgrader.run(creep);
    }
    else if (creepRole == 'builder') {
        let roleBuilder = require('role.builder');
        roleBuilder.run(creep);
    }
    else if (creepRole == 'repairer') {
        let roleRepairer = require('role.repairer');
        roleRepairer.run(creep);
    }
    else if (creepRole == 'wallRepairer') {
        let roleWallRepairer = require('role.wallRepairer');
        roleWallRepairer.run(creep);
    }
    /*else if (creepRole == halp*//*){
        let roleLoneDistanceHarvester = require('role.longdistanceharvester');
        roleLongDistanceHarvester.run(creep)
    }*/
    else if (creepRole == 'miner') {
        let roleMiner = require('role.miner');
        roleMiner.run(creep);
    }
    else if (creepRole == 'claimer') {
        let roleclaimer = require('role.claimer');
        roleclaimer.run(creep);
    }
    else if (creepRole == 'delivery') {
        let roleDelivery = require('role.delivery');
        roleDelivery.run(creep);
    }

    } //end of rolecall function

}
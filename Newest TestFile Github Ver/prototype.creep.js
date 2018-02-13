module.exports = {

   test: Creep.prototype.test = function () {
      var anotherTestyThing = [
     creepMemHarvestSourceID = creep.memory.jobTask[0].harvestingSourceID,
     creepMemHarvestSource = creep.memory.jobTask[0].harvestingSource,
     creepMemUpgradeController = creep.memory.jobTask[1].upgradingAttempt,
     creepMemUpgradeID = creep.memory.jobTask[1].upgradingSourceID,
     creepMemDelivery = creep.memory.jobTask[2].deliveryToStructure,
     creepMemDeliverID = creep.memory.jobTask[2].deliveryToStructureID,
     creepMemBuildingStructure = creep.memory.jobTask[2].buildingStructure,
     creepMemBuildingStructureID = creep.memory.jobTask[2].buildingStructureID,
     creepMemRepair = creep.memory.jobTask[4].repairing,
     creepMemRepairTargets = creep.memory.jobTask[4].repairingID,
     creepMemBirthRole = creep.memory.jobTask[5].creepBirthRole,
     creepMemJobToggle = creep.memory.jobTask[6].jobToggle
   ];
   },


    roleCall: function(creep, ab) {


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
        else if (creepRole == 'longDistance'){
            let roleLongDistanceHarvester = require('role.longDistanceHarvester');
            roleLongDistanceHarvester.run(creep)
        }
        else if (creepRole == 'miner') {
            let roleMiner = require('role.miner');
            roleMiner.run(creep);
        }
        else if (creepRole == 'claimer') {
            let roleClaimer = require('role.claimer');
            roleClaimer.run(creep);
        }
        else if (creepRole == 'delivery') {
            let roleDelivery = require('role.delivery');
            roleDelivery.run(creep);
        }
    }, //end of rolecall function

    creepWorkVariables: () => {

    }



};
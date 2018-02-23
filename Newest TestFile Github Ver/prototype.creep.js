module.exports = (creep) => {
    var creepMemHarvestSourceID = creep.memory.jobTask[0].harvestingSourceID;
    var creepMemHarvestSource = creep.memory.jobTask[0].harvestingSource;
    var creepMemUpgradeController = creep.memory.jobTask[1].upgradingAttempt;
    var creepMemUpgradeID = creep.memory.jobTask[1].upgradingSourceID;
    var creepMemDelivery = creep.memory.jobTask[2].deliveryToStructure;
    var creepMemDeliverID = creep.memory.jobTask[2].deliveryToStructureID;
    var creepMemBuildingStructure = creep.memory.jobTask[2].buildingStructure;
    var creepMemBuildingStructureID = creep.memory.jobTask[2].buildingStructureID;
    var creepMemRepair = creep.memory.jobTask[4].repairing;
    var creepMemRepairTargets = creep.memory.jobTask[4].repairingID;
    var creepMemBirthRole = creep.memory.jobTask[5].creepBirthRole;
    var creepMemJobToggle = creep.memory.jobTask[6].jobToggle;


 };

    exports.roleCall = function(creep, creepRole) {
        console.log('hi')

        //calling roleName and its index for its role
        let workActions = require('prototype.creep.workActions');
        console.log(creep.memory.role)
        //workActions.averageWorker();

        if (creep.memory.role == 'harvester') {

            workActions.averageWorker(creep, 'harvester');
        }
        else if (creepRole != 'harvester') {
            console.log('problem')
        }
    };
     //end of rolecall function



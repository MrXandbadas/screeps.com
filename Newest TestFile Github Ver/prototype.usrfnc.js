module.exports = function() {

    var creepMemHarvestSourceID = creep.memory.jobTask[0].harvestingSourceID;
    var creepMemHarvestSource = creep.memory.jobTask[0].harvestingSource;
    var creepMemUpgradeController = creep.memory.jobTask[1].upgradingAttempt;
    var creepMemUpgradeID = creep.memory.jobTask[1].upgradingSourceID;
    var creepMemDeliver = creep.memory.jobTask[2].deliveryToStructure;
    var creepMemDeliverID =creep.memory.jobTask[2].deliveryToStructure;
    var creepMemBuildingStructure = creep.memory.jobTask[2].buildingStructure;
    var creepMemBuildingStructureID =creep.memory.jobTask[2].buildingStructureID;
    var creepMemRepair = creep.memory.jobTask[4].repairing;
    var creepMemRepairTargets = creep.memory.jobTask[4].repairingID;
    var creepMemBirthRole = creep.memory.jobTask[5].creepBirthRole;
    var creepMemJobToggle = creep.memory.jobTask[6].jobToggle;

    
};
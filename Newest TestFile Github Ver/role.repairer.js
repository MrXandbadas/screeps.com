var useMe = require('prototype.creep')
useMe.test()
var roleRepairer = {

    run: function (creep) {

        
        if (creepMemHarvestSource == 'false' && creep.carry.energy == 0 || creep.carry.energy != creep.carryCapacity) {

            creepMemHarvestSource = 'true';
        }
        
        else if (creepMemHarvestSource == 'true' && creep.carry.energy == creep.carryCapacity) {
            creepMemUpgradeController = 'true';
            creepMemHarvestSource = 'false';
        }
        else if (creepMemRepair == 'false' && creep.carry.energy == creep.carryCapacity) {
    
            creepMemHarvestSource = 'false';
            creepMemRepair = 'true';
        }
    
        else if (creepMemRepair == 'true' && creep.carry.energy == 0) {
    
     
            creepMemHarvestSource = 'true';
            creepMemRepair = 'false';
        }

        else if (creepMemHarvestSource == 'false' && creep.carry.energy == creep.carryCapacity) {
    
     
            creepMemHarvestSource = 'false';
            creepMemRepair = 'true';


        }
    


           
        }
    
};

module.exports = roleRepairer;

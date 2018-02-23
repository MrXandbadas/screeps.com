var useMe = require('prototype.creep')
        useMe.test()
module.exports = {

    run: function (creep) {
        

        
        if (creepMemHarvestSource == 'false' && creep.carry.energy == 0) {

            creepMemHarvestSource = 'true';
        }
      /* else if (creepMemHarvestSource == 'true' && creep.carry.energy == creep.carryCapacity) {
            
    
            creepMemHarvestSource = 'false';
            creepMemUpgradeController = 'true';
        }*/
        

      /* else if (creepMemHarvestSource == 'false' && creep.carry.energy == creep.carryCapacity) {
    
            creepMemUpgradeController = 'true';
        }*/
    
       else if (creepMemUpgradeController == 'true' && creep.carry.energy == 0) {
    
     
            creepMemHarvestSource = 'true';
            creepMemUpgradeController = 'false';
        }

       else if (creepMemUpgradeController == 'false' && creep.carry.energy == creep.carryCapacity) {
    
     
            creepMemHarvestSource = 'false';
            creepMemUpgradeController = 'true';


        }

        var workAction = require('prototype.creep.workActions');



           do { workAction.UpgraderTask(creep);
            console.log('test ', + creepMemUpgradeController)
        } while (creepMemUpgradeController == true);
               
        } // end of Run Function
    
    };
    
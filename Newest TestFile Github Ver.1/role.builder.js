module.exports = {

    run: function (creep) {

        console.log('Hi i am ',creep.name)
        
        if (creepMemHarvestSource == 'false' && creep.carry.energy == 0) {

            creepMemHarvestSource = 'true';

        }
        
       else if (creepMemHarvestSource == 'true' || creep.carry.energy == creep.carryCapacity) {

    
            creepMemHarvestSource = 'false';
            console.log(creepMemHarvestSource)
            creepMemBuildingStructure = 'true';
        console.log('false harvest and go for build', creep.name)
    }
       else if (creepMemHarvestSource == 'false' && creep.carry.energy == creep.carryCapacity) {

            creepMemHarvestSource = 'false';
            creepMemBuildingStructure = 'true';
        }
    
       else if (creepMemBuildingStructure == 'true' && creep.carry.energy == 0) {
    

            creepMemHarvestSource = 'true';
            creepMemBuildingStructure = 'false';
        }

       else if (creepMemBuildingStructure == 'false' && creep.carry.energy == creep.carryCapacity) {

     
            creepMemHarvestSource = 'false';
            creepMemBuildingStructure = 'true';


        }

        
           
        } //end of run function
        
    };
    
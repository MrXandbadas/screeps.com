module.exports = {

    run: function (creep) {
    
        if (creep.memory.jobTask[0].harvestingSource = 'false' && creep.carry.energy == 0) {

            creep.memory.jobTask[0].harvestingSource = 'true';
        }
        
        else if (creep.memory.jobTask[0].harvestingSource == 'true' && creep.carry.energy == creep.carryCapacity) {
    
            creep.memory.jobTask[0].harvestingSource = 'false';
            creep.memory.jobTask[3].buildingStructure = 'true';
        }
        else if (creep.memory.jobTask[0].harvestingSource == 'false' && creep.carry.energy == creep.carryCapacity) {
    
            creep.memory.jobTask[0].harvestingSource = 'false';
            creep.memory.jobTask[3].buildingStructure = 'true';
        }
    
        else if (creep.memory.jobTask[3].buildingStructure == 'true' && creep.carry.energy == 0) {
    
     
            creep.memory.jobTask[0].harvestingSource = 'true';
            creep.memory.jobTask[3].buildingStructure = 'false';
        }

        else if (creep.memory.jobTask[3].buildingStructure == 'false' && creep.carry.energy == creep.carryCapacity) {
    
     
            creep.memory.jobTask[0].harvestingSource = 'false';
            creep.memory.jobTask[3].buildingStructure = 'true';


        }

        /// 


        if (creep.memory.jobTask[3].buildingStructure  == 'true') {
 
            let buildingSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            if (creep.memory.jobTask[3].buildingStructureID != buildingSite) {
 
                creep.memory.jobTask[3].buildingStructureID = buildingSite.id;
        if (buildingSite == null) {
    console.log(buildingSite, ' Builders not working! No site defined in search')
        }

            }

            if (creep.memory.jobTask[3].buildingStructureID != undefined) {

                
            if (creep.build(buildingSite) == ERR_NOT_IN_RANGE) {
            const path = creep.pos.findPathTo(buildingSite);
             creep.memory.path = path;
            Memory.path = Room.serializePath(path);
            creep.moveByPath(Memory.path);
                    
        }
    } else {console.log("hiithere")}
        }



        if (creep.memory.jobTask[0].harvestingSource == 'true') {
            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    
           if (creep.memory.jobTask[0].harvestingSourceID == undefined) {
     
               creep.memory.jobTask[0].harvestingSourceID = source.id;
     
           }
    
             if (creep.memory.jobTask[0].harvestingSourceID != undefined) {

                    if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                        const path = creep.pos.findPathTo(source);
                        creep.memory.path = path;
                        Memory.path = Room.serializePath(path);
                        creep.moveByPath(Memory.path);
                        
                        }
            }
           
        }
           
        }
    
    
    
        
    
    
    
    };
    
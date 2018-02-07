module.exports = {

run: function (creep) {

    deliverTas = function(creep) {  

    }





    ///
    
    if (creep.memory.jobTask[0].harvestingSource == 'true' && creep.carry.energy == creep.carryCapacity) {

        creep.memory.jobTask[0].harvestingSource = 'false';
    }
    else if (creep.memory.jobTask[0].harvestingSource == 'false' && creep.carry.energy == creep.carryCapacity) {

        creep.memory.jobTask[2].deliveryToStructure = 'true';
    }

    else if (creep.memory.jobTask[0].harvestingSource == 'false' && creep.carry.energy == 0) {

 
        creep.memory.jobTask[0].harvestingSource = 'true';
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


    if (creep.memory.jobTask[2].deliveryToStructure == 'true') {

        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => (s.structureType == STRUCTURE_SPAWN
                || s.structureType == STRUCTURE_EXTENSION
                || s.structureType == STRUCTURE_TOWER)
                && s.energy < s.energyCapacity
        });
        if (structure != undefined) {
   

            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(structure);
                creep.memory.path = path;
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);
                
    }
        } else if (strucutre == undefined) { 
            let strucutre = creep.room.storage;
     
            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(structure);
                creep.memory.path = path;
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);
                
    }
        }
        else {

        }



    }






    if (creep.memory.jobTask[0].harvestingSource == 'false' ) {
       

       // console.log(JSON.stringify(creep.memory.jobTask[2]))
        //console.log(structure.id)


    }




    

}

};

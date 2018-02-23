



    exports.averageWorker = (creep, selectedRole) => {

        const creepMemHarvestSourceID = creep.memory.jobTask.harvestingSourceID.sources[0].id;
        const creepMemHarvestSource = creep.memory.jobTask.harvestingSource;
        const creepMemUpgradeController = creep.memory.jobTask.upgradingAttempt;
        const creepMemUpgradeID = creep.memory.jobTask.upgradingSourceID;
        const creepMemDelivery = creep.memory.jobTask.deliveryToStructure;
        const creepMemDeliverID = creep.memory.jobTask.deliveryToStructureID;
        const creepMemBuildingStructure = creep.memory.jobTask.buildingStructure;
        const creepMemBuildingStructureID = creep.memory.jobTask.buildingStructureID;
        const creepMemRepair = creep.memory.jobTask.repairing;
        const creepMemRepairTargets = creep.memory.jobTask.repairingID;
        const creepMemBirthRole = creep.memory.jobTask.creepBirthRole;
        const creepMemJobToggle = creep.memory.jobTask.jobToggle;
    

        let deliverTask, harvestTask, upgraderTask;
        

        function creepTalk(creep, outP){ 
            new RoomVisual(creep.room.name).text(outP,
            creep.pos.x + 1,
            creep.pos.y,
            {align: 'left', opacity: 0.4});
        } // creep text display function, nested.

        function harvestSource(creep) {
            creepTalk(creep, 'Harvesting');
            
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {   
 
                const path = creep.pos.findPathTo(source);             
                creep.memory.path = path;                    
                new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,                    
                opacity: .2, lineStyle: 'dashed'});                    
                Memory.path = Room.serializePath(path);                  
                creep.moveByPath(Memory.path);
            
            }
        }
        function transferEnergyStructure(creep) {

            if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(structure);
                creep.memory.path = path;
                new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                opacity: .2, lineStyle: 'dashed'});
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);
                
            }

        }







        Creep.prototype.harvestTask = function (creep) {





            // end of funct
           var sourceObj = creep.room.find(FIND_SOURCES);

           console.log(creep.name, creep.carryCapacity, ' carrycap | energy ', creep.carry.energy);

            if (sourceObj.length == 1 && creep.carry.energy != creep.carryCapacity || creep.carry.energy == 0) {
                var source = sourceObj[0];
                creep.memory.role = 'harvester';
                harvestSource(creep);
            }
            else if (sourceObj.length == 2 && creep.carry.energy != creep.carryCapacity || creep.carry.energy == 0) {
                var source = sourceObj[0];
                creep.memory.role = 'harvester';
                harvestSource(creep);

            } else if (sourceObj.length > 2 && creep.carry.energy != creep.carryCapacity || creep.carry.energy == 0)
            
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.jobTask.harvestingSource = false;
                console.log('hiii')
                var creepMemDelivery = true;
                console.log(creep.name, creepMemHarvestSource, creepMemDelivery)
                creep.deliverTask(creep);
               

            }

        }, // creep harvestTask function, nested.

        Creep.prototype.deliverTask = function(creep) {
            creepTalk(creep, 'Building')

            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_EXTENSION
                    || s.structureType == STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });


            //end of functions
            
            console.log(structure)
            if (structure != undefined) {
        
transferEnergyStructure(creep, source)

            } 
            else if (!(structure != undefined)) { 

                    
                }
         
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    const path = creep.pos.findPathTo(structure);
                    creep.memory.path = path;
                    new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
                    
                }
            else  {
              creep.upgraderTask(creep);  
            }


        },
   
         Creep.prototype.upgraderTask = function(creep) {

            function upgradeTime(creep){
                creepTalk(creep, 'Upgrading!');
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    const path = creep.pos.findPathTo(creep.room.controller);
                    creep.memory.path = path;
                   new RoomVisual(creep.room.name).poly(path, {stroke: '#fff',         strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
    
                    }
            }

            if(creepMemUpgradeController == true) {
            for(let i = 0; creep.carry.energy != 0; i++) {
                upgradeTime(creep);
                }
            } else if (creepMemUpgradeController == false) {
                console.log('imfalse')
            }

                if (creepMemUpgradeID != undefined) {
                    console.log(creepMemUpgradeID)
                   
               } 
            else if (creepMemUpgradeID == '') {
               var creepMemUpgradeID = creep.room.controller.id;
                } 
                
        }



},




//

//after was run roleBuilder - for refference
    


    exports.creepBasicWork = function(creep) {
        



        var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
            filter: (s) => (s.structureType == STRUCTURE_SPAWN
                || s.structureType == STRUCTURE_EXTENSION
                || s.structureType == STRUCTURE_TOWER)
                && s.energy < s.energyCapacity
        });




        // checking if the creep is carrying 0 energy and harvestmem isnt false
       creepNfHSF: if (creep.carry.energy != creep.carryCapacity) {
           //
            
            
                if (creep.carry.energy == creep.carryCapacity) {
                creepMemHarvestSource = 'false';
                creepMemDelivery = 'true';
                break creepNfHSF;
            }   
            harvestTask(creep);
            //creepMemHarvestSource = 'true';
            textset('Harvesting!');
            

            
        }
        console.log('testaa')
        creepD: if (creepMemDelivery == 'true') {
            textset('Im Full');
            console.log('help')
            deliverTask(creep);
            if (structure === null || structure === undefined) {
                console.log('hey')
                break creepD;
            }
        }
        
        if (creepMemDelivery == 'true' && creep.carry.energy == creep.carryCapacity) {
            console.log('test')
        }
        else if (creepMemHarvestSource == 'true' && creep.carry.energy == 0) {
    
            creepMemDelivery= 'false';
            
            
    
        }
        else if (creepMemHarvestSource == 'false' && creep.carry.energy == creep.carryCapacity) {
    
            creepMemDelivery= 'true';
            
        }
        

        // seperated 



    }
   


        


// From Role Repairer Script
/*
if (creepMemHarvestSource == 'true') {
    const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);

   if (creepMemHarvestSourceID == undefined) {

    creepMemHarvestSourceID = source;

   }

     if (creepMemHarvestSourceID != undefined) {

            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(source);
                creep.memory.path = path;
                new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                opacity: .2, lineStyle: 'dashed'});
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);
                
    }
    }
   
}
//
if (creepMemUpgradeController == 'true' ) {
    targets = creep.room.find(FIND_STRUCTURES, {
        filter: object => object.hits < object.hitsMax
    });


    if (targets == undefined) {
        creepMemRepair = creep.room.controller.id;
    }

    if (creep.memory.jobTask[1].upgradingSourceID != undefined) {

    if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
    const path = creep.pos.findPathTo(creep.room.controller);
     creep.memory.path = path;
     new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
        opacity: .2, lineStyle: 'dashed'});
    Memory.path = Room.serializePath(path);
    creep.moveByPath(Memory.path);
            
}
}
}
// 
*/
/*
builderTask: function (creep) {
    if (creepMemBuildingStructure == 'true' ) {


        if (creepMemBuildingStructureID != undefined) {
            var constructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES); // note this var can change into an array we can 'shift' and 'unshift' to create a kind of orderlog/priotity system.
            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                const path = creep.pos.findPathTo(creep.room.controller);
                creep.memory.path = path;
                new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                opacity: .2, lineStyle: 'dashed'});
                Memory.path = Room.serializePath(path);
                creep.moveByPath(Memory.path);

            }  

        }   
        else if (!(creepMemBuildingStructure != undefined)) {
            let roleUpgrader = require('role.upgrader');
            roleUpgrader.run(creep);
        }
    }
}

*/


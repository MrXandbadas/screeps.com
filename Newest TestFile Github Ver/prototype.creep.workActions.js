var useMe = require('prototype.creep');
useMe.test();
module.exports = {

    creepBasicWork: function(creep) {

        // checking if the creep is carrying 0 energy and harvestmem isnt false
        if (creep.carry.energy != creep.carryCapacity && creepMemHarvestSource == 'false') {

            creepMemHarvestSource = 'true';
            textset('Harvesting!');

            
        }
        else if (creepMemHarvestSource == 'true' && creep.carry.energy == creep.carryCapacity) {
            creepMemDelivery = 'true';
            creepMemHarvestSource = 'false';
            textset('Im Full');
        
    
        }
        else if (creepMemHarvestSource == 'true' && creep.carry.energy == 0) {
    
            creepMemDelivery= 'false';
            
            
    
        }
        else if (creepMemHarvestSource == 'false' && creep.carry.energy == creep.carryCapacity) {
    
            creepMemDelivery= 'true';
            
        }
        

        // seperated 


        if (creepMemHarvestSource == 'true') {
            harvestTask(creep);
            textset('I Should go Harvest');
            return;
        }
        else if (creep.carry.energy == creep.carryCapacity && creepMemDelivery){}
        else if (creepMemDelivery == 'true') {
            deliverTask(creep);
            textset('Back to base!');
            
        }



   


        function deliverTask(creep) {


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
                    new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
                    
                }
            } 
            else if (structure === undefined || structure === null) { 
                let strucutre = creep.room.storage;
         
                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    const path = creep.pos.findPathTo(structure);
                    creep.memory.path = path;
                    new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
                    
                }

            }
            else  {
              console.log('test')  
            }


        };
   
        function harvestTask(creep) {
            if (creepMemHarvestSource == 'true') {
            const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (creepMemHarvestSourceID == undefined) {
                    let ye = Game.getObjectById(source);
                    creepMemHarvestSourceID = ye;
                }
         
                if (creepMemHarvestSourceID!= undefined) { 
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

        }; // creep harvestTask function, nested.

        function upgraderTask(creep) {
            if (creep.carry != creep.carryCapacity) {
                creepMemHarvestSource = 'true';
                return;
            } else if (creep.carry == creep.carryCapacity) {
                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    const path = creep.pos.findPathTo(creep.room.controller);
                    creep.memory.path = path;
                   new RoomVisual(creep.room.name).poly(path, {stroke: '#fff',         strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
    
                    }
                }

                if (creepMemUpgradeID != undefined) {
                    console.log(creepMemUpgradeID)
                   
               } 
            else if (creepMemUpgradeID == '') {
                creepMemUpgradeID = creep.room.controller.id;
                } else if (creepMemUpgradeID == undefined) {
                    let quick = Game.getObjectbyID(creep.room.controller);
                    creepMemUpgradeID = quick;
                    
                    }
        

                
        };

        function textset(outP){ 
            new RoomVisual(creep.room.name).text(outP,
            creep.pos.x + 1,
            creep.pos.y,
        {align: 'left', opacity: 0.3});
            }; // creep text display function, nested.
    },


//

//after was run roleBuilder - for refference



// From Builder Script
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
//


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


};
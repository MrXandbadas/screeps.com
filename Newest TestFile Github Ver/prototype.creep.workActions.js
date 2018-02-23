require('prototype.creep')();



    exports.averageWorker = (creep, selectedRole) => {

        let deliverTask, harvestTask, upgraderTask;
        



        Creep.prototype.deliverTask = function(creep) {

            let structure;
            
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
            else if (!(structure != undefined)) { 
                        let structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                            // the second argument for findClosestByPath is an object which takes
                            // a property called filter which can be a function
                            // we use the arrow operator to define it
                            filter: (s) => (s.structureType == STRUCTURE_SPAWN
                                || s.structureType == STRUCTURE_EXTENSION
                                || s.structureType == STRUCTURE_TOWER)
                                && s.energy < s.energyCapacity
                        });
                    
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
              console.log('test')  
            }


        },
   
         Creep.prototype.harvestTask = function (creep) {
            useMe.creepMem(creep)
            console.log('here harvestTask')
            if (!(creep.carry != creep.carryCapacity)) {
                console.log('carrying me so hard')
                const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
            } else if (creepMemHarvestSource == 'true') {
            
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

        }, // creep harvestTask function, nested.

         Creep.prototype.upgraderTask = function(creep) {
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
        

                
        },

         function testset(outP){ 
            new RoomVisual(creep.room.name).text(outP,
            creep.pos.x + 1,
            creep.pos.y,
        {align: 'left', opacity: 0.3});
            } // creep text display function, nested.






//Generator Functions *Lightly foams at mouth*
function* genCreep() {

 var myTest = yield       
    //console.log('generator after 2nd next')
    yield console.log(myTest);
     return 'mystring'; //return is to finish the generator, shutoff procedure/reboot prep
     
     
         }


//start generator
const genRun = genCreep();
const genRunDR1 = JSON.stringify(genRun.next());
//const genRunDR = JSON.stringify();
//const genRunDR2 = JSON.stringify(genRun.next(deliverTask));

///
console.log(JSON.stringify(genRun.next(Creep.prototype.harvestTask(creep))));
            //console.log(genRunDR);






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



                
let baseSetting = require('prototype.varconfig')
let shortCount = baseSetting.countCreeps();

             function creepMemDefine(creep) {
                
                var creepMemHarvestSourceID = creep.memory.jobTask.harvestingSourceID.sources[0].id;
                var creepMemHarvestSource = creep.memory.jobTask.harvestingSource;
                

                var creepMemBuildingStructure = creep.memory.jobTask.buildingStructure;
                var creepMemBuildingStructureID = creep.memory.jobTask.buildingStructureID;
                var creepMemRepair = creep.memory.jobTask.repairing;
                var creepMemRepairTargets = creep.memory.jobTask.repairingID;
                var creepMemBirthRole = creep.memory.jobTask.creepBirthRole;
                var creepMemJobToggle = creep.memory.jobTask.jobToggle;}
             
        
        function creepTalk(creep, outP){ 
           new RoomVisual(creep.room.name).text(outP,
            creep.pos.x + 1,
            creep.pos.y,
            {align: 'left', opacity: 0.4});
        } // creep text display function, nested.


function creepPathingFunc(creep) {
//Copy and pasted from the API Doc, Added myTarget as the goals array (map outputs an array)
    

if (creep.memory.role != undefined){
    if (creep.memory.role == 'harvester'){
        console.log('testing Harvester goal')
        let goals = _.map(creep.room.find(FIND_SOURCES), function(source) {
        // We can't actually walk on sources-- set `range` to 1 
        // so we path next to it.
        return { pos: source.pos, range: 1 };
        
      });
      return goals;
    }
    else if (creep.memory.role == 'builder'){
        console.log('testing defining builder goal')
        let goals = _.map(creep.room.find(FIND_MY_CONSTRUCTION_SITES), function(structure) {
            // We can't actually walk on sources-- set `range` to 1 
            // so we path next to it.
            return { pos: structure.pos, range: 1 };
          });
          return goals;

    }
    else if (creep.memory.role == 'upgrader') {
        console.log('testing - is defining Upgrader Source!')
        let goals = _.map(creep.room.controller);
          return goals;

    }
    else if (creep.memory.role == 'delivery') {
        console.log('testing - isnt defining a goal! DELIVERY')
        let goals = _.map(creep.room.find(FIND_MY_STRUCTURES), function(structure) {
            // We can't actually walk on sources-- set `range` to 1 
            // so we path next to it.
            return { pos: structure.pos, range: 1 };
          }, {filter: (s) => (s.structureType == STRUCTURE_SPAWN
            || s.structureType == STRUCTURE_EXTENSION
            || s.structureType == STRUCTURE_TOWER)
            && s.energy < s.energyCapacity
    });
          return goals;

    }
    else {
        

        if (shortCount.harvesterCount < 3) {
            //quickly counting and assigning any stray creeps with no role (Freshly spawned ones)
            creep.memory.role = 'harvester';
        }


    }

    // console.log("GOALS HERE ", JSON.stringify(goals))
    return goals;
    
}
    
      let ret = PathFinder.search(
        creep.pos, goals,
        {
          // We need to set the defaults costs higher so that we
          // can set the road cost lower in `roomCallback`
          plainCost: 2,
          swampCost: 10,
    
          roomCallback: function(roomName) {
    
            let room = Game.rooms[roomName];
            // In this example `room` will always exist, but since 
            // PathFinder supports searches which span multiple rooms 
            // you should be careful!
            if (!room) return;
            let costs = new PathFinder.CostMatrix;
    
            room.find(FIND_STRUCTURES).forEach(function(struct) {
              if (struct.structureType === STRUCTURE_ROAD) {
                // Favor roads over plain tiles
                costs.set(struct.pos.x, struct.pos.y, 1);
              } else if (struct.structureType !== STRUCTURE_CONTAINER &&
                         (struct.structureType !== STRUCTURE_RAMPART ||
                          !struct.my)) {
                // Can't walk through non-walkable buildings
                costs.set(struct.pos.x, struct.pos.y, 0xff);
              }
            });
    
            // Avoid creeps in the room
            room.find(FIND_CREEPS).forEach(function(creep) {
              costs.set(creep.pos.x, creep.pos.y, 0xff);
            });
    
            return costs;
          },
        }
      );
      creep.move(creep.pos.getDirectionTo(pos));
}



        //creep Pathing nested

Creep.prototype.runTask = function (creep) {

}



        Creep.prototype.harvestTask = function (creep) {
            creepMemDefine(creep);
            function harvestSource(creep) {

                var sourceObj = creep.pos.findClosestByPath((FIND_SOURCES));
                creepTalk(creep, 'Harvesting');
                
                if (creep.harvest(sourceObj) == ERR_NOT_IN_RANGE) {
                
                    //creepPathingFunc(creep);
                    const path = creep.pos.findPathTo(sourceObj);
                    creep.memory.path = path;
                   new RoomVisual(creep.room.name).poly(path, {stroke: '#fff',         strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
                
                

                  
                  

                    
                  } else if (creep.carry.energy == creep.carryCapacity) {
                      creep.memory.role = 'delivery';
                      creep.memory.jobTask.harvestingSource = false;
                  }
                
                
                }
            

            //Start of prototype

            if (creep.carry.energy == 0){
            creep.memory.role = 'harvester';
            //console.log('harvester Reporting!')
            }
            else if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.role = 'delivery'
            }
                       

            if (creep.memory.role == 'harvester' && creep.carry.energy != creep.carryCapacity) {
                console.log('im harvesting' , creep.name)

                if (creep.carry.energy == creep.carryCapacity) {
                    creep.memory.jobTask.harvestingSource = false;
                   // creep.memory.role = '';
                    
                }

            harvestSource(creep);

        }

            
            

        }, // creep harvestTask function, nested.

        Creep.prototype.deliverTask = function(creep) {

        

            var creepMemDelivery = creep.memory.jobTask.deliveryToStructure;
            function transferEnergyStructure(creep, structure) {

                if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    const path = creep.pos.findPathTo(structure);
                    creep.memory.path = path;
                   new RoomVisual(creep.room.name).poly(path, {stroke: '#fff',         strokeWidth: .15,
                    opacity: .2, lineStyle: 'dashed'});
                    Memory.path = Room.serializePath(path);
                    creep.moveByPath(Memory.path);
                    
                } else if (creep.transfer(structure, RESOURCE_ENERGY) == ERR_FULL) {
                    console.log('building Full!')
                }
                else {console.log(creep.transfer(structure, RESOURCE_ENERGY))}
    
            }




            creepMemDefine(creep);
            creepTalk(creep, 'Delivery time!')
            creep.memory.role = 'delivery';

            
            if (creep.carry.energy == creep.carryCapacity){
                creepMemDelivery = true;
            } 
            else if (creep.carry.energy == 0){
                creepMemDelivery = false;
                creep.memory.role = 'harvester';
                creep.memory.jobTask.harvestingSource = true;
            }

            if (creepMemDelivery == true) {

                 if (creep.carry.energy != 0) {
                   

            var structure = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                // the second argument for findClosestByPath is an object which takes
                // a property called filter which can be a function
                // we use the arrow operator to define it
                filter: (s) => (s.structureType == STRUCTURE_SPAWN
                    || s.structureType == STRUCTURE_ROAD
                    || s.structureType == STRUCTURE_EXTENSION
                    || s.structureType == STRUCTURE_TOWER)
                    && s.energy < s.energyCapacity
            });
            console.log(creep.name, 'STRUCTURE IS: ', JSON.stringify(structure))

            if (structure != undefined || null) {
                console.log('im delivering' , creep.name)
        transferEnergyStructure(creep, structure);

            }
              else if (structure == undefined || structure == null) { 
    
            var creepMemBuildingStructure = creep.memory.jobTask.buildingStructure;
                           console.log(creep.name + ' HELP ME')
            if (shortCount.builderCount < 2 ){
                creep.memory.role = 'builder';
                creepMemBuildingStructure = true;
                creepMemDelivery = false;
                }
            
            else if (shortCount.builderCount > 2) {
                creep.memory.role = 'upgrader';
                creepMemDelivery = false;
            }

             
                
            }
        }
    }
               


        },

        Creep.prototype.builderTask = function(creep) {

            var creepMemDelivery = creep.memory.jobTask.deliveryToStructure;
            var creepMemBuildingStructureID = creep.memory.jobTask.buildingStructureID;
            var creepMemBuildingStructure = creep.memory.jobTask.buildingStructure;

            if (creep.memory.role == 'builder') {

                if (shortCount.builderCount < 2 ){
                    creep.memory.role = 'builder';
                    creepMemBuildingStructure = true;
                    creepMemDelivery = false;
                    }
                
                else if (shortCount.builderCount > 2) {
                    creep.memory.role = 'upgrader';
                    creepMemDelivery = false;
                }

                if (creep.carry.energy != 0) {

                        if (creepMemBuildingStructureID != undefined) {
                            console.log('im Building' , creep.name)
                            var constructionSite = creep.pos.findClosestByPath(FIND_MY_CONSTRUCTION_SITES); // note this var can change into an array we can 'shift' and 'unshift' to create a kind of orderlog/priotity system.
                            
                            if (creep.build(constructionSite) == ERR_NOT_IN_RANGE) {
                                const path = creep.pos.findPathTo(creep.room.controller);
                                creep.memory.path = path;
                                new RoomVisual(creep.room.name).poly(path, {stroke: '#fff', strokeWidth: .15,
                                opacity: .2, lineStyle: 'dashed'});
                                Memory.path = Room.serializePath(path);
                                creep.moveByPath(Memory.path);
                
                            }
                
                        }

                    
                }
                else if (creep.carry.energy == 0) {
                    creep.memory.role = 'harvester';
                    creepMemBuildingStructure = false;
                }

            }

        },
   
         Creep.prototype.upgraderTask = function(creep) {
            var creepMemUpgradeController = creep.memory.jobTask.upgradingAttempt;
            var creepMemUpgradeID = creep.memory.jobTask.upgradingSourceID;
            creepMemDefine(creep);

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

            if(creep.memory.role == 'upgrader' && creep.carry.energy != 0) {
                creepMemUpgradeController = true;
                console.log('im Upgradinging' , creep.name)
                upgradeTime(creep)

            } else if (creep.carry.energy == 0) {
                creepMemUpgradeController = false;
                creep.memory.role = 'harvester';

            }
            else {
                console.log('another lse')
            }
            if (creepMemUpgradeID != creep.room.controller) {
            creepMemUpgradeID = creep.room.controller;
                   
               }
                
        }








    module.exports.tier1Work = function(creep) {



    
        var creepMemDelivery = creep.memory.jobTask.deliveryToStructure;
        var creepMemDeliverID = creep.memory.jobTask.deliveryToStructureID;
        var creepMemHarvestSource = creep.memory.jobTask.harvestingSource;
        //let deliverTask, harvestTask, upgraderTask;
        // wHYcreepMemDefine(creep);

        



        //not messy below

       // console.log('Tier1Work Begin ====')
       /* while (creep.carry.energy == 0) {
            
    
        }*/
        
       // creepPathingFunc(creep);
        if (creep.carry.energy != 0 && creep.memory.role == 'delivery') {
            creep.deliverTask(creep); 
        }
        else if (creep.memory.role == 'builder') {
            creep.builderTask(creep);
        }
        else if (creep.memory.role == 'upgrader') {
            creep.upgraderTask(creep);
        }
        else if (creepMemHarvestSource == 'true') {
            creep.harvestTask(creep);

        }
        else if (creep.carry.energy == 0){

            if (creepMemHarvestSource == 'true') {
            creep.harvestTask(creep);
            
            }
            

        }
        
        // end of func
       // console.log('Tier1Work Ends ====')
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


  
        else if (!(creepMemBuildingStructure != undefined)) {
            let roleUpgrader = require('role.upgrader');
            roleUpgrader.run(creep);
        }
    }
}

*/


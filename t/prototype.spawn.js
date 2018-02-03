module.exports = function() {

    calcSpawn = function(spawn, selectedRole) {
        selectedRole = [];
       if (spawnMem.aStage == undefined) {

        setMemorySpawn(spawn);
       }
       else {
           
            if (spawnMem.aStage == 1) {
                countCreeps();
                
                energy = spawnMem.myEnergy;
              /*  let i = 1;
                if (i == 1) {
                    usrSpawn();
                }*/ 
                let counter = 10;
                for (let i = 0; i < counter; ++i ) {
                    
                    if (i > 1) {
                        break;
                    } else 
                    

            if (energy > 300) { 



                if (harvesterCount < spM.minHarvester) {
                    harvester1Spawn(selectedRole)  
                    
                }
                else if (upgraderCount < spM.minUpgrader) {
                    upgrader1Spawn(selectedRole);
                }
                else if (deliveryCount < spawnMem.minDelivery) {
                    delivery1Spawn(selectedRole)


                }                
        
                else if (builderCount < spM.minBuilder) {
                    builder1Spawn(selectedRole)
                }
                else if (repairerCount < spM.minRepairer) {
                    repairer1Spawn(selectedRole)
                }

                
                else if (longDistanceCount < 6) {
                

                   longDistance1Spawn(selectedRole);
                }
                } else {} 
                --counter;

            } }
            else if (spawnMem.aStage == 9) { 
                usrSpawn();
            }
            else if (spawnMem.aStage == 2) {

                spawnMem.claimRoom = false;
                if (spawnMem.claimRoom == true) {
                    usrSpawn();
                }

                countCreeps();
                energy = spawnMem.myEnergy;

 

                if (energy > 600) {   
                if (deliveryCount < spM.minDelivery) {
                    delivery1Spawn(selectedRole);
                }
                else if (minerCount < spM.minMiner) {
                    miner1Spawn(selectedRole);
                }
                else if (longDistanceCount < 4) {
                

                    longDistance1Spawn(selectedRole);
                 }
                else if (builderCount < spM.minBuilder) {
                    builder1Spawn(selectedRole)
                }
                else if (repairerCount < spM.minRepairer) {
                    repairer1Spawn(selectedRole)
                }

                else if (upgraderCount < spM.minUpgrader) {
                    upgrader1Spawn(selectedRole);
                }
            }
            //builderRoomSpawn(selectedRole);
        }
        }
   // return selectedRole.       

        };
        harvester1Spawn = function(selectedRole) {
            creepName = 'Harvester: ' + Game.time;
            name = spawn.backupHarvester(creepName);
            selectedRole.push('harvester');
        }
        builder1Spawn = function(selectedRole) {
            creepName = 'Builder: ' + Game.time;
            name = spawn.createCreepType1(energy, 'builder', creepName);
            selectedRole.push('builder');
        }
        builderRoomSpawn = function(selectedRole) {
            creepName = 'Builder: ' + Game.time;
            name = spawn.createCreepType1(energy, 'builder', creepName, 'E4N49');
            selectedRole.push('builder');
        }
        miner1Spawn = function(selectedRole) {
            creepName = 'Miner: ' + Game.time; 
                    name = spawn.createMiner1(energy, 'miner', creepName);
                    selectedRole.push('miner');
        }
        delivery1Spawn = function(selectedRole) {
            creepName = 'Delivery: ' + Game.time; 
                    name = spawn.createCreepTypeCarryMove(energy, 'delivery', creepName);
                    selectedRole.push('delivery');

        }
        upgrader1Spawn = function(selectedRole) {
            creepName = 'Upgrader: ' + Game.time; 
                    name = spawn.createCreepType1(energy, 'upgrader', creepName);
                    selectedRole.push('upgrader');
        }
        repairer1Spawn = function(selectedRole) {
            creepName = 'Repairer: ' + Game.time; 
                    name = spawn.createCreepType1(energy, 'repairer', creepName);
                    selectedRole.push('repairer');
        }
        longDistance1Spawn = function(selectedRole) {
            creepName = ' Weary Traveler: ' + Game.time; 

                    name = spawn.createCreepLongDistance(energy, 'longDistance', creepName);
                    selectedRole.push('longDistance');

        }
 
   
       usrSpawn = function(){
           creepName = ' Claimer! MINE ' + Game.time;
        name = spawn.createClaimer(creepName);

       }

       StructureSpawn.prototype.createClaimer = function (creepName) {
            
         return this.spawnCreep([WORK,CLAIM,CARRY,MOVE], creepName , { memory: {
             role: 'claimer', target: 'E4N49'
         }
        });
    };




    StructureSpawn.prototype.backupHarvester = function (creepName) {
    let numberOfParts = Math.floor(energy / 200);
    var body = [];
    for (let i = 0; i < numberOfParts; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(CARRY);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(MOVE);
    }          
     return this.spawnCreep(body, creepName, { memory: {
         role: 'harvester', working: false
     }
    });
    };

    StructureSpawn.prototype.createCreepType1 = function (energy, roleName, creepName, target) {


        let numberOfParts = Math.floor(energy / 200);
        var body = [];
        for (let qwq = 0; qwq < numberOfParts; qwq++) {
            body.push(WORK);
        }
        for (let qwq = 0; qwq < numberOfParts; qwq++) {
            body.push(CARRY);
        }
        for (let qwq = 0;qwq< numberOfParts; qwq++) {
            body.push(MOVE);
        }          
         return this.spawnCreep(body, creepName, { memory: {
             role: roleName,
             working: false,
             target: target 
         }
            });    
    
        };

        StructureSpawn.prototype.createMiner1 = function (energy, roleName, creepName) {
    
                  
         return this.spawnCreep([WORK,WORK,WORK,WORK,WORK,WORK,MOVE], creepName, { memory: {
            role: 'miner'
        }
       });
   };

    StructureSpawn.prototype.createCreepTypeNoWork = function (energy, roleName, creepName) {


            let numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let qwq = 0; qwq < numberOfParts; qwq++) {
                body.push(CARRY);
            }

            for (let qwq = 0;qwq< 2; qwq++) {
                body.push(MOVE);
            }          
             return this.spawnCreep(body, creepName, { memory: {
                 role: roleName,
                 working: false 
             }
                });    
        
            };
    StructureSpawn.prototype.createCreepTypeCarryMove = function (energy, roleName, creepName) {


                let numberOfParts = Math.floor(energy / 200);
                var body = [];
                body.push(WORK);
                for (let qwq = 0; qwq < numberOfParts; qwq++) {
                    body.push(CARRY);
                }
                for (let qwq = 0;qwq< numberOfParts; qwq++) {
                    body.push(MOVE);
                }          
                 return this.spawnCreep(body, creepName, { memory: {
                     role: roleName,
                     working: false,
                     sourceID: '' 
                 }
                    });    
            
                };
                StructureSpawn.prototype.createCreepLongDistance = function (energy, roleName, creepName) {


                    let numberOfParts = Math.floor(900 / 200);
                    var body = [];
                    for (let qwq = 0; qwq < numberOfParts; qwq++) {
                        body.push(WORK);
                    }
                    for (let qwq = 0; qwq < numberOfParts; qwq++) {
                        body.push(CARRY);
                    }
                    for (let qwq = 0;qwq< numberOfParts; qwq++) {
                        body.push(MOVE);
                    }          
                     return this.spawnCreep(body, creepName, { memory: {
                         role: roleName,
                         working: false,
                         home: spawnMem.roomName, 
                         target: 'E3N49',
                         sourceIndex: ''
                     }
                        });    
                
                    };

};
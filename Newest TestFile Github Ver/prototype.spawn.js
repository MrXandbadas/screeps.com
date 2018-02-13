module.exports = function() {

    

        var workState = [
            {harvestingSource: 'true', harvestingSourceID: ''},
            {upgradingAttempt: 'false', upgradingSourceID: ''},
            {deliveryToStructure: 'false', deliveryToStructureID: ''},
            {buildingStructure: 'false', buildingStructureID: ''},
            {repairing: '', repairingID: ''},
            {creepBirthRole: '', blankSpaceBaby: 'Your Name'},
            {jobToggle: 0}
    
        ];
        
    

    calcSpawn = function(spawn) {

        if (!(spawn.memory.repopulation) || spawn.memory.repopulation == undefined) {
            spawn.memory.repopulation = [{toggle: 'true'}];
           
        }

        selectedRole = [];
       if (spawnMem.aStage == undefined) {

        function spawningMessage(){
            // Give a message when spawning someone
            if(Game.spawns[home].spawning) {
                var spawningCreep = Game.creeps[Game.spawns[home].spawning.name];
                new RoomVisual(Game.spawns[home].room.name).text('Spawning a ' + Game.spawns[home].spawning.name,
                Game.spawns[home].pos.x + 1,
                Game.spawns[home].pos.y,
            {align: 'left', opacity: 0.8});}
        }
        setMemorySpawn(spawn);
       }
       else {
           if(spawn.memory.repopulation[0].toggle != 'false') {
            if (spawnMem.aStage == 1) {
                countCreeps();
                energy = spawn.energy;
              /*  let i = 1;
                if (i == 1) {
                    usrSpawn();
                }*/
                

                if(harvesterCount == 0 && minerCount == 0){
                    harvester1Spawn(selectedRole) 
                     
                }
            else if (energy >= 300) { //in aStage = 1 this needs to remain at 300
                if (harvesterCount < spawnMem.minHarvester) {
                    harvester1Spawn(selectedRole)  
                }
                if (harvesterCount == 1){
                    spawn.memory.repopulation[0].toggle = 'false'
                }
                
                else if (upgraderCount < spawnMem.minUpgrader) {
                    upgrader1Spawn(selectedRole);
                }
                
                else if (deliveryCount < spawnMem.minDelivery) {
                    delivery1Spawn(selectedRole)
                }                
        
                else if (builderCount < spawnMem.minBuilder) {
                    builder1Spawn(selectedRole)
                }
                
                else if (repairerCount < spawnMem.minRepairer) {
                    repairer1Spawn(selectedRole)
                }

                else if (longDistanceCount < 6) {
                   longDistance1Spawn(selectedRole);
                }
            }
                else {
                    //blank else statement
                   
                }

            } 
            else if (spawnMem.aStage = 2) {
                countCreeps();
                energy = spawnMem.myEnergy;
                
                if (energy > 600) {
                    
                if (deliveryCount < spawnMem.minDelivery) {
                    delivery1Spawn(selectedRole);
                }
                if (minerCount < spawnMem.minMiner1) {

                    miner1Spawn(selectedRole);
                }
                else if (builderCount < spawnMem.minBuilder) {
                    builder1Spawn(selectedRole)
                }
                else if (repairerCount < spawnMem.minRepairer) {
                    repairer1Spawn(selectedRole)
                }

                else if (upgraderCount < spawnMem.minUpgrader) {
                    upgrader1Spawn(selectedRole);
                }
            }
            console.log('Amount of Energy: ' + energy); // LOG HERE! -- For future Refference
            }
        }
    }
    };
     // return selectedRole.       

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
                    console.log(name) //LOG HERE! -- For future Refference
        }
 
   
       usrSpawn = function(spawn){
        name = spawn.createClaimer();
       }

       StructureSpawn.prototype.createClaimer = function (creepName) {
            
         return this.spawnCreep([WORK,CLAIM,CARRY, MOVE], creepName, { memory: {
             role: 'claimer', target: 'E3N48'
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
         role: 'harvester', jobTask: workState, home: spawn.room.name
        }
    });
};

    StructureSpawn.prototype.createCreepType1 = function (energy, roleName, creepName) {


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
             role: roleName, jobTask: workState, home: spawn.room.name 
         }
            });    
    
        };

        StructureSpawn.prototype.createMiner1 = function (energy, roleName, creepName) {
    
                  
         return this.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], creepName,
                                    { memory: { role: 'miner'} });
        
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
                         target: 'E2N48',
                         sourceIndex: ''
                }
            });    
                
        };

};
module.exports = function() {

    calcSpawn = function(spawn, selectedRole) {
      /* if (spawnMem.aStage == undefined) {

        setMemorySpawn(spawn);
       }
       else {
        if (spawnMem.aStage == 1) {
            countCreeps();
            energy = spawnMem.myEnergy;
            if (harvesterCount < 2) {
                creepName = 'Harvester: ', Game.time;
                let role = spawnMem.selectedRole;
                console.log(JSON.stringify(energy));
           // role.push('harvester');
                console.log('inside return FNC');
            };
        }
            else if (builderCount < spM.minBuilder) {
                creepName = 'Builder: ', Game.time;
                name = spawn.createCreepType1(energy, 'builder', creepName);
        }

        else if (upgraderCount < spM.minUpgrader) {
                creepName = 'Upgrader: ' + Game.time; 
                name = spawn.createCreepType1(energy, 'upgrader', creepName);
        }
        }*/
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
             role: roleName,
             working: false 
         }
            });    
    
        };

    StructureSpawn.prototype.createCreepTypeNoWork = function (energy, roleName, creepName) {


            let numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let qwq = 0; qwq < numberOfParts; qwq++) {
                body.push(CARRY);
            }
            for (let qwq = 0;qwq< numberOfParts; qwq++) {
                body.push(MOVE);
            }          
             return this.spawnCreep(body, creepName, { memory: {
                 role: roleName,
                 working: false 
             }
                });    
        
            };
    StructureSpawn.prototype.createCreepTypeNoMove = function (energy, roleName, creepName) {


                let numberOfParts = Math.floor(energy / 200);
                var body = [];
                body.push(MOVE);
                for (let qwq = 0; qwq < numberOfParts; qwq++) {
                    body.push(CARRY);
                }
                for (let qwq = 0;qwq< numberOfParts; qwq++) {
                    body.push(WORK);
                }          
                 return this.spawnCreep(body, creepName, { memory: {
                     role: roleName,
                     working: false 
                 }
                    });    
            
                };

};
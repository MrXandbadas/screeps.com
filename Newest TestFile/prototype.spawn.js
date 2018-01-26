module.exports = function() {
 
   
    StructureSpawn.prototype.backupHarvester = function (creepName) {
    let numberOfParts = Math.floor(300 / 200);
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
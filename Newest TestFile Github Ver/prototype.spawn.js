module.exports = function() {
    var spM = spawn.memory;
    home = spawn.room;
    energy = spawn.energyAvaliable
    

    harvester1Spawn = function(selectedRole) {
        var user = require('prototype.varconfig');
        creepName = 'Harvester: ' + Game.time;
        selectedRole.push('harvester');
        name = spawn.usrfncHarvester(energy,creepName,'harvester');

    }
    upgrader1Spawn = function(selectedRole) {
        creepName = 'Upgrader: ' + Game.time; 
        selectedRole.push('upgrader');
        name = spawn.usrfncHarvester(energy,creepName, 'upgrader');
                
    }
    repairer1Spawn = function(selectedRole) {
        creepName = 'Repairer: ' + Game.time; 
        selectedRole.push('repairer');
        name = spawn.usrfncHarvester(energy,creepName, 'repairer');
                
    }
    
    
    StructureSpawn.prototype.usrfncHarvester = function (energy, creepName, roleName, workState) {
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
             role: roleName, jobTask: workState, home: ''
         }
        });
        };




};
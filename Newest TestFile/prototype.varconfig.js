module.exports = function() {
    var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps,minCounter, spawnMem, calcSpawn;
    
    var roleName = [];
    var roleCount = {};

    
/* 
Please define new roles inside the roleName.push() array function
*/
roleName.push('harvester', 'repairer', 'wallRepairer', 'builder', 'upgrader','delivery', 'miner');

// One use role
roleName.push('claimer');

/* Please define minimum number of Roles per room */

   var setMemorySpawn = function(spawn) {
    spawnMem.minBuilder = 2;
    spawnMem.minDelivery = 1;
    spawnMem.minMiner = 2;
    spawnMem.minUpgrader = 4;
    spawnMem.minRepairer = 3;
    spawnMem.minHarvester = 1;
    spawnMem.minWallRepairer = 1;

    spawnMem.aStage = 1;

    spawnMem.myEnergy = spawn.room.energyAvaliable;
    spawnMem.myEnergyCap = spawn.room.energyCapacityAvaliable;
    energy = spawnMem.myEnergy;


   };

   /* Please define any Role Counting var */
var 
harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester'),
upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader'),
builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder'),
repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer'),
wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer'),
deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery'),
minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner'),
claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');

notDebug = function(spawn) {
    console.log('Time: ',Game.time, ': ' ,'--- Not just a Debug 😉 ---');
    console.log(spawn.spawning.name, 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
    console.log('-------------');
};


}; //end of export
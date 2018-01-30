module.exports = function() {
    baseVar = function() {
    var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps, minCounter, spawnMem, calcSpawn, setMemorySpawn;
    
    var roleName = [];

    var roleCount = {};


    
/* 
Please define new roles inside the roleName.push() array function
*/


roleNameSet = function() {
    roleName = [];

    roleName.push('harvester', 'repairer', 'wallRepairer', 'builder', 'upgrader','delivery', 'miner');

// One use role
roleName.push('claimer');
}
};

/* Please define minimum number of Roles per room */

setMemorySpawn = function(spawn) {
    spawnMem.minBuilder = 2;
    spawnMem.minDelivery = 0;
    spawnMem.minMiner = 0;
    spawnMem.minUpgrader = 2;
    spawnMem.minRepairer = 2;
    spawnMem.minHarvester = 3;
    spawnMem.minWallRepairer = 1;

    spawnMem.aStage = 1;
    spawnMem.selectedRoleArr = [];

    spawnMem.myEnergy = spawn.room.energyAvailable;
    spawnMem.myEnergyCap = spawn.room.energyCapacityAvailable;


   };

   /* Please define any Role Counting var */
countCreeps = function(){
harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester'),
upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader'),
builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder'),
repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer'),
wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer'),
deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery'),
minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner'),
claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
};

notDebug = function(spawn, allMyCreeps) {
    console.log('Time: ',Game.time, ': ' ,'--- Not just a Debug 😉 ---');
    console.log(spawn.spawning.name, 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
    console.log('-------------');
};


}; //end of export
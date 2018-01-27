var usrFnc = require('prototype.usrfnc');
require('prototype.spawn')();
var roleName = [];
var roleCount = {};
roleName.push('harvester', 'repairer', 'wallRepairer', 'builder', 'upgrader','delivery', 'miner');


var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps,minCounter, spawnMem;

   var setMemorySpawn = function(spawn) {
    spawnMem.minBuilder = 2;
    spawnMem.minDelivery = 1;
    spawnMem.minMiner = 2;
    spawnMem.minUpgrader = 4;
    spawnMem.minRepairer = 3;
    spawnMem.minHarvester = 1;
    spawnMem.minWallRepairer = 1;
   };


runRole = function (ab, creep, creepRole) {
    if (creepRole = ab) {
        usrFnc.roleCall(creep, roleName);
    }
};

module.exports.loop = function () {

    for (let name in Memory.creeps) {
        if (Game.creeps[name] == undefined) {
            delete Memory.creeps[name];
        }
    } 
        let allMyCreeps = 0;
    for (let name in Game.creeps) {
        creep = Game.creeps[name];
        allMyCreeps = allMyCreeps + 1 //CountingCreeps :D
        

        for (let indexa = 0; indexa < roleName.length; ++indexa) {
            var ab = roleName[indexa];
            runRole(ab, creep, creepRole); //fucking is this a higherorder function?? D:
            };
    } //end of for name in Game.creeps
//console.log(allMyCreeps, ' Creeps in Total');
    for (let i in Game.spawns) { 
        spawn = Game.spawns[i];
        energy = 300;
        energyCap = spawn.room.energyCapacityAvaliable;
        spawnMem = spawn.memory;
        setMemorySpawn(spawn);
        spM = spawnMem;



        var harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        var upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        var builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
        var repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');
        var claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
        var wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer');
        var deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery');
        var minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner');






        //console.log(harvesterCount);

        /* having trouble with spawning a creep without there being a creep first D: Maybe I should make a mock creep?  */

        if (allMyCreeps < 2) {
            console.log('due to ', allMyCreeps ,' number of creeps harvester will be spawned');
            creepName = 'Harvester: ' + Game.time;
            name = spawn.backupHarvester(creepName);
        }
//        console.log(allMyCreeps);
        
        if (!(spawn.spawning == null)) {

            console.log('Time: ',Game.time, ': ' ,'--- Not just a Debug 😉 ---');
            console.log(spawn.spawning.name, 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
            console.log('-------------');
        } // end of !(spawn.spawning)
        else if (harvesterCount < spM.minHarvester) {
            //console.log('Harvester Selected');
            creepName = 'Harvester: ' + Game.time;
            name = spawn.createCreepType1(energy, 'harvester', creepName);
        }
        else if (minerCount < spM.minMiner) {
            //console.log('Miner Selected');
            creepName = 'Miner: ' + Game.time;
            name = spawn.createCreepTypeNoMove(energy, 'miner', creepName);
        }
        else if (deliveryCount < spM.minDelivery) {
            //console.log('Delivery Selected.')
            creepName = 'Delivery: ', Game.time;
            name = spawn.createCreepTypeNoWork(energy, 'delivery', creepName);
        }
        else if (builderCount < spM.minBuilder) {
                //console.log('Builder Selected.')
                creepName = 'Builder: ', Game.time;
                name = spawn.createCreepType1(energy, 'builder', creepName);
        }

        else if (upgraderCount < spM.minUpgrader) {
                //console.log('Upgrader Selected.');
                creepName = 'Upgrader: ' + Game.time; 
                name = spawn.createCreepType1(energy, 'upgrader', creepName);
        }
        

      

        // calling upon var spawn to create a new creep


} // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
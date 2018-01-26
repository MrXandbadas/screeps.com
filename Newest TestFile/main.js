var usrFnc = require('prototype.usrfnc');
require('prototype.spawn')();
var roleName = [];
var roleCount = {};
roleName.push('harvester', 'repairer', 'wallRepairer', 'builder', 'upgrader','delivery', 'miner');


var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps;

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
            //debug || console.log(indexa, ' is equal to ', roleName[indexa]);
            var ab = roleName[indexa];
            runRole(ab, creep, creepRole); //fucking is this a higherorder function?? D:
            };
    } //end of for name in Game.creeps

    for (let i in Game.spawns) { 
        spawn = Game.spawns[i];
        energy = 300;
        energyCap = spawn.room.energyCapacityAvaliable;


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

        if (allMyCreeps < 5) {
            console.log('due to ', allMyCreeps ,' number of creeps harvester will be spawned');
            creepName = 'Harvester: ' + Game.time;
            name = spawn.backupHarvester(creepName);
        }
        if (!(spawn.spawning == null)) {

            console.log('Time: ',Game.time, ': ' ,'--- Not just a Debug 😉 ---');
            console.log(spawn.spawning.name, ' will be spawned by ', spawn.spawning.remainingTime + Game.time);
            console.log('-------------');
        } // end of !(spawn.spawning)

        else if (allMyCreeps >= 2) {
            /*if (minerCount < 2) {
                creepName = 'Miner: ' + Game.time;
                name = spawn.createCreepType1(energy, 'miner', creepName);
            }
            else if (deliveryCount < minerCount) {
                creepName = 'Delivery: ', Game.time;
                name = spawn.createCreepTypeNoWork(energy, 'delivery', creepName);
            }*/

            /*else */if (upgraderCount < 2) {
                creepName = 'Upgrader: ' + Game.time; 
                name = spawn.createCreepType1(energy, 'upgrader', creepName);
        }
      

        // calling upon var spawn to create a new creep
        } // end of else if energy == energyCap arg

} // end of game.spawns for arg

console.log('At the end of the Game loop');
} // end of exports.loop function {}
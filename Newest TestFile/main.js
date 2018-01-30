require('prototype.varconfig')();
require('prototype.spawn')();
var usrFnc = require('prototype.usrfnc');


baseVar();
roleNameSet();






runRole = function (ab, creep, roleName) {
    if (creep.memory.role = ab) {
        usrFnc.roleCall(creep, roleName);
    };
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
        roleName = creep.memory.role;
        allMyCreeps = allMyCreeps + 1 //CountingCreeps :D
        
        roleNameSet();
        for (let indexa = 0; indexa < roleName.length; ++indexa) {
            var ab = roleName[indexa];
            runRole(ab, creep, roleName); //fucking is this a higherorder function?? D:
            };
    } //end of for name in Game.creeps
//console.log(allMyCreeps, ' Creeps in Total');
    for (let i in Game.spawns) { 
        spawn = Game.spawns[i];
        spawnMem = spawn.memory;
        calcSpawn(spawn);
        spM = spawnMem;
name = undefined;

        
        if (!(spawn.spawning == null)) {

            notDebug(spawn, allMyCreeps);


        } // end of !(spawn.spawning)

        console.log(harvesterCount);
        console.log(spM.minHarvester);
/*
           energy = spawn.room.energyAvailable;
            countCreeps();
            console.log(spM.minHarvesters);
            let nameEnd = JSON.stringify(Game.time);
            if (harvesterCount < spM.minHarvester) {
                creepName = 'Harvester: ', nameEnd;
                name = spawn.backupHarvester(creepName);
                if (!(name == 0)) {
                    let aab = Game.time;
                    let creepName = "harvesterStan " + aab;
                    name = spawn.backupHarvester(creepName);
                    console.log(minHarvesters);
                }
            }
            else if (builderCount < spM.minBuilder) {
                creepName = 'Builder: ', Game.time;
                name = spawn.createCreepType1(energy, 'builder', creepName);
                if (!(name == 0)) {
                    let aab = Game.time;
                    let creepName = "BuilderBob " + aab;
                    name = spawn.createCreepType1(energy, 'builder', creepName);
                }
            }

             else if (upgraderCount < spM.minUpgrader) {
                creepName = 'Upgrader: ' + Game.time; 
                name = spawn.createCreepType1(energy, 'upgrader', creepName);
                if (!(name == 0)) {
                    let aab = Game.time;
                    let creepName = "Upgrader " + aab;
                    name = spawn.createCreepType1(energy, 'upgrader', creepName);
                }
            }
*/
        

        // calling upon var spawn to create a new creep


} // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
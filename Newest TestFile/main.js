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



        
        if (!(spawn.spawning == null)) {

            notDebug(spawn, allMyCreeps);


        } // end of !(spawn.spawning)
      else {
            energy = spawn.room.energyAvailable;
            countCreeps();
            if (harvesterCount < 2) {
                creepName = 'Harvester: ', Game.time;
                name = spawn.backupHarvester(energy, creepName);
            }

        }

        // calling upon var spawn to create a new creep


} // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
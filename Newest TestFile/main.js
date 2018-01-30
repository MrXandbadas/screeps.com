require('prototype.varconfig')();
var usrFnc = require('prototype.usrfnc');
require('prototype.spawn')();









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
        spawnMem = spawn.memory;
        calcSpawn(spawn);

        //console.log(harvesterCount);

        /* having trouble with spawning a creep without there being a creep first D: Maybe I should make a mock creep?  */

        if (allMyCreeps < 2) {
            console.log('due to ', allMyCreeps ,' number of creeps harvester will be spawned');
            creepName = 'Harvester: ' + Game.time;
            name = spawn.backupHarvester(creepName);
        }
//        console.log(allMyCreeps);
        
        if (!(spawn.spawning == null)) {

            notDebug(spawn);
        } // end of !(spawn.spawning)
      
        

      

        // calling upon var spawn to create a new creep


} // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
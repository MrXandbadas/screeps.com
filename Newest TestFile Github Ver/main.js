require('prototype.varconfig')();
require('prototype.spawn')();
var usrFnc = require('prototype.creep', 'prototype.usrfnc');


baseVar();


runRole = function (ab, creep, rN) {
    if (creep.memory.role == ab) {
        usrFnc.roleCall(creep, rN, ab);
    }
};
runClear = function() {for (let name in Memory.creeps) {

    if (Game.creeps[name] == undefined) {

        delete Memory.creeps[name];
    }}
};

module.exports.loop = function () {

    runClear(); 
        let allMyCreeps = 0;
  
    for (let name in Game.creeps) {
        creep = Game.creeps[name];
        roleName = creep.memory.role;
        allMyCreeps = allMyCreeps + 1 //CountingCreeps :D

        baseVarRole();
         //bout to break this
        //for (let i =0; 0 < 7; ++i) {
            //console.log(JSON.stringify(selRoleName[i]))

             //}

         let rN = selRoleName;
        for (let indexa = 0; indexa < rN.length; ++indexa) {
            var al = rN[indexa];
            var ab = al.role;
            runRole(ab, creep);
            };
            
    } //end of for name in Game.creeps

    for (let i in Game.spawns) { 
        spawn = Game.spawns[i];
        
        HOME = spawn.room.name
        spawnMem = spawn.memory;
        baseVarRole();
       // let roleNamex = roleName.length;
        setMemorySpawn(spawn);
        roleNameSet(spawnMem);
        calcSpawn(spawn); //spawning process
        countCreeps();
        
        //console.log(JSON.stringify(selectedRole));

        spM = spawnMem;
        name = undefined;
       
        console.log(creep.room.storage)
        if (!(spawn.spawning == null)) {

            notDebug(spawn, allMyCreeps);


        } // end of !(spawn.spawning)


} // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
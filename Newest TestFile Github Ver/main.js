require('prototype.varconfig')();
require('prototype.spawn')();
var usrFnc = require('prototype.creep', 'prototype.usrfnc');


baseVar();


runRole = function (creep) {
    if (creep.memory.role == creep.memory.role) {
        usrFnc.roleCall(creep);
      //  console.log('yes', creep)
    }
};
runClear = function() {for (let name in Memory.creeps) {

    if (Game.creeps[name] == undefined) {

        delete Memory.creeps[name];
    }}
};

module.exports.loop = function () {

    runClear(); 
  
    for (let name in Game.creeps) {
        creep = Game.creeps[name];
        creep.memory.currentRoom = creep.room.name;
 
        roleName = creep.memory.role;

        
        baseVarRole();

         let rN = selRoleName;
         var abCounter = []
        for (let indexa = 0; indexa < rN.length; ++indexa) {
            var al = rN[indexa];
            var ab = al.role;
            
            abCounter.push(ab , al.roleCount, creep.room.name)
            
            runRole(creep);
            
            };
           
            
    } //end of for name in Game.creeps
    var spawnCounter = [];
    for (let i in Game.spawns) {
        spawn = Game.spawns[i];
        let nene = Game.spawns.length;
        baseVarRole(spawn);
        spawnCounter.push(spawn)
        
        
    }
    
       for (let aaa = 0; spawnCounter.length > aaa; ++aaa) {
       
        spawn = spawnCounter[aaa];
        //console.log(Game.spawns[i], 'hi')
        HOME = spawn.room.name
        spawnMem = spawn.memory;
        
       // let roleNamex = roleName.length;
        setMemorySpawn(spawn);
        roleNameSet(spawnMem);
       calcSpawn(spawn); //spawning process
        countCreeps(spawn);
        
        var memorySave = function() {
            
            spawnMem = spawn.memory;
        }
        //console.log(JSON.stringify(selectedRole));

        spM = spawnMem;
        name = undefined;

        
        if (!(spawn.spawning == null)) {

            notDebug(spawn);


        } // end of !(spawn.spawning)
    }

 // end of game.spawns for arg

//console.log('At the end of the Game loop');
}; // end of exports.loop function {}
console.log('still running! Time is: ', Game.time);
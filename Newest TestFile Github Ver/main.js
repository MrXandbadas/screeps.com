require('screeps-perf')({
    speedUpArrayFunctions: true,
    cleanUpCreepMemory: true,
    optimizePathFinding: false
  });
const profiler = require('screeps-profiler');
require('prototype.varconfig')();
require('prototype.spawn')();
require('prototype.debug')();
var usrFnc = require('prototype.creep', 'prototype.usrfnc');


baseVar();

testCommand = function(){
    console.log = ('test is working'); // console log
};

runRole = function (ab, creep, rN) {
    if (creep.memory.role == ab) {
        usrFnc.roleCall(creep, rN, ab);
    }
};

module.exports.loop = function () {
    profiler.wrap(function() {

        let allMyCreeps = 0;
  
        for (let name in Game.creeps) {
            creep = Game.creeps[name];
            //creep.suicide();
    
            roleName = creep.memory.role;
            allMyCreeps = allMyCreeps + 1 //CountingCreeps :D

            baseVarRole();

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
            /* returning error ->*/ //spawningMessage();
            countCreeps();
            /* returning error (I have no tower?)->*/ //towerDefend();
            //console.log(JSON.stringify(selectedRole));

            name = undefined;


            //debug1(spawn, allMyCreeps, energy);
            // spawn.spawning is spawning someone. ! means not
            if (!(spawn.spawning == null)) {

                debug(spawn, allMyCreeps);
            } // end of !(spawn.spawning)
        } // end of game.spawns for arg
    }) // end of profiler.wrap
}; // end of the loop 
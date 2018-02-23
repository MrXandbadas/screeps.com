//console.log(JSON.stringify(Game.spawns['Spawn1']));

require('screeps-perf')({
    speedUpArrayFunctions: true,
    cleanUpCreepMemory: true,
    optimizePathFinding: false
  });
  _ = require('lodash');
const spawnpro = require('prototype.spawn');
const profiler = require('screeps-profiler');
var confi = require('prototype.varconfig');

var debug = require('prototype.debug');
var usrFnc = require('prototype.creep', 'prototype.usrfnc');

var creep, baseVar, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps, minCounter, spawnMem, spM, calcSpawn, setMemorySpawn, aStage, stageUpdate,roleName,target, sourceIndex, HOME, selRoleName,workState, roleCount;


let testCommand = function(){
    console.log = ('test is working'); // console log
};



module.exports.loop = function () {
    
    profiler.wrap(function() 
    {
        var runRole = function (ab, creep) {
            
        };


        let allMyCreeps = 0;
  
        for (let name in Game.creeps) {
            creep = Game.creeps[name];
            
            //creep.suicide();
    
            roleName = creep.memory.role;
            allMyCreeps = allMyCreeps + 1 //CountingCreeps :D

            confi.baseVarRole();

        let rN = confi.baseVarRole();
        for (let indexa = 0; indexa < rN.length; ++indexa) {
            var al = rN[indexa];
            var ab = al.role;
            let creepRole = creep.memory.role;
            if (creep.memory.role == ab) {
                usrFnc.roleCall(creep, ab);
            }
            //runRole(creep, creepRole);

        };            
    } //end of for name in Game.creeps
    for (let i in Game.spawns) { 
            spawn = Game.spawns[i];
        
            HOME = spawn.room.name
            spawnMem = spawn.memory;
            //baseVarRole();
            // let roleNamex = roleName.length;
            confi.setMemorySpawn(spawn,spawnMem);
            confi.roleNameSet(spawnMem);
            spawnpro.calcSpawn(spawn,spawnMem); //spawning process
            /* returning error ->*/ //spawningMessage();
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
var _ = require('lodash');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleMiner = require('role.miner');
var roleclaimer = require('role.claimer');
var roleDelivery = require('role.delivery');
require('prototype.spawn')();
//var usrFnc = require('prototype.creep');


/*
line break for me head
*/

module.exports.loop = function () {
//all variables inside this function are LOCAL to the function
    for (let name in Game.creeps) {
        // get/define the creep object
        var creep = Game.creeps[name];
        var creepRole = creep.memory.role;

        var creepCount = {
            
            harvesterCount = _.sum(Game.creeps, (c) => creepRole == 'harvester'),
            
            repairerCount = _.sum(Game.creeps, (c) => creepRole == 'repairer'),
            
            wallRepairerCount = _.sum(Game.creeps, (c) => creepRole == 'wallRepairer'),
            
            builderCount = _.sum(Game.creeps, (c) => creepRole == 'builder'),
            
            upgraderCount = _.sum(Game.creeps, (c) => creepRole == 'upgrader'),
            
            deliveryCount = _.sum(Game.creeps, (c) => creepRole == 'delivery'),
            
            minerCount = _.sum(Game.creeps, (c) => creepRole == 'miner')
                
        };
        console.log(JSON.stringify(creepCount));


        // Checking Roles of Creeps. If true Creep will execute role
        if (creepRole == 'harvester') {
            roleHarvester.run(creep);
        }
        else if (creepRole == 'upgrader') {
            roleUpgrader.run(creep);
        }
        else if (creepRole == 'builder') {
            roleBuilder.run(creep);
        }
        else if (creepRole == 'repairer') {
            roleRepairer.run(creep);
        }
        else if (creepRole == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        else if (creepRole == 'longDistanceHarvester'){
            roleLongDistanceHarvester.run(creep);
        }
        else if (creepRole == 'miner') {
            roleMiner.run(creep);
        }
        else if (creepRole == 'claimer') {
            roleclaimer.run(creep);
        }
        else if (creepRole == 'delivery') {
            roleDelivery.run(creep);
        }
    }

/* 
This next section is for Variables that need to be re-checked every tick
*/



let debugMe = false;
//Finished decairing variables that need updating


if (creep.spawning == true) {
console.log('Creep is Spawning!! lets not try to do sheit while it do dat')

}
else if (creep.spawning == false) { 
    for (const i in Game.spawns) {
    let spawn = Game.spawns[i];
    var energy = spawn.room.energyCapacityAvailable;
console.log('Max room energy = ', energy);

//console.log(usrFnc);

/*  move this push call somewhere else 
Also use .shift to remove from the begning of array and .unshift to add to the begining of given array. 
*/
/*
if (usrFnc.spawnList.length == 0) {
    usrFnc.spawnList.push('harvester');
}
if (usrFnc.spawnList.length >= 1) {
   usrFnc.selectedRole = usrFnc.spawnList.unshift();
   let selectedRole = JSON.stringify(usrFnc.selectedRole);

   name = spawn.testbody(energy, selectedRole);

}
*/


if (debugMe == true) {
console.log('----------')
console.log(JSON.stringify(usrFnc.spawnList[0]));
console.log(usrFnc.spawnList.length);
console.log('----&&&&&&&-----') }
/*

name = spawn.createCreep([WORK,WORK,CARRY,MOVE], undefined,
    { role: spawnList.pop(), working: false});
*/
    };
}; //end of 'if false'

// gotta do sumfin here



} //end of loop export

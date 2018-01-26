/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.test1');
 * mod.thing == 'a thing'; // true
 */
 
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var main = require('main');
var checkdone = 1;

var harvestcount = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
var buildercount = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
var repairercount = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
var upgradercount = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');



//Imported modules above this line only.

var creepnamecheck = {

run: function(creepnamecheck) {
	
	if(checkdone = 1) {
	console.log(checkdone);
	
	console.log('Harvester: ' + harvestcount.length);
	console.log('Builders: ' + buildercount.length);
	console.log('Repairer: ' + repairercount.length);
	console.log('Upgrader: ' + upgradercount.length);
	var checkdone = 1 - 1;
	console.log(checkdone);
	}
}




};



//

var harvest1 = {


	// Check if we have enough Harvesters if not spawn one
	if(harvestcount.length < 4) {

	Game.spawns['SpawnAlpha'].spawnCreep([WORK,WORK,CARRY,MOVE], newNameHarvest,
	{memory: {role: 'harvester'}});
	}
};

var builder1 = {

	// Check if we have enough builders if not spawn
	if(buildercount.length < 5) {
	Game.spawns['SpawnAlpha'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE], newNameBuilder,
	{memory: {role: 'builder'}});
	}
};
var repairer1 = {



	// Check if we have enough Repairers if not spawn one
	if(repairercount.length < 3) {

	Game.spawns['SpawnAlpha'].spawnCreep([WORK,WORK,WORK,CARRY,MOVE,MOVE], newNameRepair,
	{memory: {role: 'repairer'}});
	}
};
var upgrader1 = {

	

	// Check if we have enough upgraders if not spawn
	if(upgradercount.length < 5) {

	Game.spawns['SpawnAlpha'].spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], newNameUpgrade,
		{memory: {role: 'upgrader'}});
	}
};

var spawningtext = {
run: function(spawningtext) {
if(Game.spawns['SpawnAlpha'].spawning) {
var spawningCreep = Game.creeps[Game.spawns['SpawnAlpha'].spawning.name];
Game.spawns['SpawnAlpha'].room.visual.text(
'THE ONE! THE ONLY ' + Game.spawns['SpawnAlpha'].spawning.name + ' is on the way!',
Game.spawns['SpawnAlpha'].pos.x + 1,
Game.spawns['SpawnAlpha'].pos.y,
{align: 'left', opacity: 0.8});}

if (Game.spawns['SpawnAlpha'].spawning) {
var NewCreepName = Game.creeps[Game.spawns['SpawnAlpha'].spawning.name];
var SpawnTimeLeft = Game.creeps[Game.spawns['SpawnAlpha'].spawning.remainingTime];
console.log('Spawning ' + NewCreepName + ' ' + SpawnTimeLeft)}
}
else {
	role.test1.run(spawncreepsAlpha)
}
};

var harvest_total = 0	




module.exports = roletest1 {

};
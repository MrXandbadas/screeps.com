// import modules
const homeSpawn = Game.spawns
require('prototype.spawn')();
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleWallRepairer = require('role.wallRepairer');
var roleLongDistanceHarvester = require('role.longDistanceHarvester');
var roleMiner = require('role.miner');
var roleclaimer = require('role.claimer');
var rolelorry = require('role.lorry');



var HOME = 'E2N49';


module.exports.loop = function () {
    //DEBUG
   

    // check for memory entries of died creeps by iterating over Memory.creeps
    for (let name in Memory.creeps) {
        // and checking if the creep is still alive
        if (Game.creeps[name] == undefined) {
            // if not, delete the memory entry
            delete Memory.creeps[name];
        }
    }

    console.log('------------');


    // for every creep name in Game.creeps
    for (let name in Game.creeps) {
        // get the creep object
        var creep = Game.creeps[name];
        Game.spawns.SpawnAlpha.memory.debugspawn = 0;
        if (Game.spawns.SpawnAlpha.memory.debugspawn == 1) {
            console.log(creep);
            console.log(creep.memory.role);
            console.log('-------------');
        }




        // if creep is harvester, call harvester script
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        // if creep is upgrader, call upgrader script
        else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        // if creep is builder, call builder script
        else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        // if creep is repairer, call repairer script
        else if (creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        // if creep is wallRepairer, call wallRepairer script
        else if (creep.memory.role == 'wallRepairer') {
            roleWallRepairer.run(creep);
        }
        // if creep is longDistanceHarvester, call longDistanceHarvester script
        else if (creep.memory.role == 'LongDistanceHarvester') {
            roleLongDistanceHarvester.run(creep);
        }
        else if (creep.memory.role == 'miner') {
            roleMiner.run(creep);
        }
        else if (creep.memory.role == 'claimer') {
            roleclaimer.run(creep);
        }
        else if (creep.memory.role == 'lorry') {
            rolelorry.run(creep);
        }
    }


    var towers = Game.rooms.E2N49.find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
    });
    for (let tower of towers) {
        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
            filter: (hostile) => hostile.owner != 'Juicy-Shark'});
        if (target != undefined) {
            tower.attack(target);
        }
    }
    
    //

    for (let spawnName in Game.spawns) {
        let spawn = Game.spawns[spawnName];
        let creepsInRoom = spawn.room.find(FIND_CREEPS);






        // count the number of creeps alive for each role
        // _.sum will count the number of properties in Game.creeps filtered by the
        //  arrow function, which checks for the creep being a specific role
        var numberOfHarvesters = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        var numberOfUpgraders = _.sum(creepsInRoom, (c) => c.memory.role == 'upgrader');
        var numberOfBuilders = _.sum(creepsInRoom, (c) => c.memory.role == 'builder');
        var numberOfRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'repairer');
        var numberOfClaimers = _.sum(creepsInRoom, (c) => c.memory.role == 'claimer');
        var numberOfWallRepairers = _.sum(creepsInRoom, (c) => c.memory.role == 'wallRepairer');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');
        var numberOfLorrys = _.sum(creepsInRoom, (c) => c.memory.role == 'lorry');
        var numberOfLongDistanceHarvestersE1N49 = _.sum(Game.creeps, (c) =>
            c.memory.role == 'LongDistanceHarvester' && c.memory.target == 'E4N49');
        var numberOfLongDistanceHarvestersE4N49 = _.sum(Game.creeps, (c) =>
            c.memory.role == 'LongDistanceHarvester' && c.memory.target == 'E4N49');
        var numberOfMiners = _.sum(creepsInRoom, (c) => c.memory.role == 'miner');


        var energy = Game.spawns.SpawnAlpha.room.energyCapacityAvailable;
        var energyammount = Game.spawns.SpawnAlpha.room.energy;
        var name = undefined;


        //Test

        console.log(energy);



        if (Game.spawns.SpawnAlpha.memory.claimertoggle == 1) {
            console.log('New Claimer Code if reached');
            console.log(Game.spawns.SpawnAlpha.memory.claimroom);
            if (Game.spawns.SpawnAlpha.memory.claimroom != undefined) {
                name = Game.spawns.SpawnAlpha.createclaimer(Game.spawns.SpawnAlpha.memory.claimRoom);
                console.log('--------------');
                console.log('spawning Claimer code called');
                console.log('-------------');

                if (!(name < 0)) {
                    delete Game.spawns.SpawnAlpha.memory.claimRoom;

                }

            }
        }

        ///test

        spawn.memory.repopulate = ('true');


        console.log('Min Harvesters :' + spawn.memory.minHarvesters + '| TotalHarvesters: ' + numberOfHarvesters);
        console.log('Min Wall Repairers: ' + spawn.memory.minwallRepairers + '| TotalWallRepairers: ' + numberOfWallRepairers);
        console.log('Min Builders :' + spawn.memory.minBuilders + '|total Builders: ' + numberOfBuilders);
        console.log('Min Upgraders :' + spawn.memory.minUpgraders + '| Total Upgraders: ' + numberOfUpgraders);
        console.log('Min Repairers :' + spawn.memory.minRepairers + '|Total Repairers: ' + numberOfRepairers);
        console.log('Min Miners :' + spawn.memory.minMiners + '|Total Miners: ' + numberOfMiners);
        console.log('Min Lorrys :' + spawn.memory.minLorrys + '|Total Lorrys: ' + numberOfLorrys);
        console.log('Min Long Harvesters Left Room :' + spawn.memory.minlongDistanceHarvesterE1N49 + '| Total Long Distance Harvesters Left Room: ' + numberOfLongDistanceHarvestersE1N49);





        console.log('Repopulation of :' + spawn + ' ' + 'is ' + spawn.memory.repopulate);

        // Begin Spawning

            if (spawn.memory.repopulate == 'true') {


                console.log('Attempting to Spawn: ');



                //
                // if not enough harvesters
                if (numberOfHarvesters < spawn.memory.minHarvesters) {
                    // try to spawn one
                    console.log('HARVESER PRIOTITY due to ' + numberOfHarvesters + ' Harvesters');
                    name = spawn.createharvesterCreep();

                }



                //Spawn Miner

                else if (numberOfMiners < spawn.memory.minMiners) {
                    // try to spawn one
                    console.log('Miner PRIOTITY due to ' + numberOfMiners + ' Miner');
                    name = spawn.createminerCreep(this);
                }

                // Spawn Lorry
                else if (numberOfLorrys < spawn.memory.minLorrys) {
                    // try to spawn one
                    console.log('Lorrys PRIOTITY due to ' + numberOfLorrys + ' Lorrys');
                    name = spawn.createlorryCreep(this);
                }


                // if not enough wallRepairers
                else if (numberOfWallRepairers < spawn.memory.minwallRepairers) {
                    // try to spawn one
                    console.log('Wall repairer selection ');
                    name = spawn.createwallRepairerCreep(this);
                }
                // if not enough builders
                else if (numberOfBuilders < spawn.memory.minBuilders) {
                    // try to spawn one
                    console.log('Builder Selected ');
                    name = spawn.createbuilderCreep(this);
                }
                // if not enough upgraders
                else if (numberOfUpgraders < spawn.memory.minUpgraders) {
                    // try to spawn one
                    console.log('Upgrader Selected ');
                    name = spawn.createupgraderCreep(this);

                }
                // if not enough repairers
                else if (numberOfRepairers < spawn.memory.minRepairers) {
                    // try to spawn one
                    console.log('Repairer Selected ');
                    name = spawn.createrepairerCreep(this);
                }

                // if not enough longDistanceHarvesters for E4N49
                else if (numberOfLongDistanceHarvestersE1N49 < spawn.memory.minlongDistanceHarvesterE1N49) {
                    // try to spawn one
                    console.log('LongDistance Harvester Selected ');
                    name = spawn.createLongDistanceHarvester(this);
                }


                // print name to console if spawning was a success
                // name > 0 would not work since string > 0 returns false
                if (!(name < 0)) {
                    console.log("Spawned new creep: " + name);
                }











            }
            console.log('End of Script');
        }
};
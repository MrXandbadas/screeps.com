var listOfRoles = ['harvester', 'lorry', 'claimer', 'upgrader', 'repairer', 'builder', 'wallRepairer'];



// ---------------

    // create a new function for StructureSpawn
StructureSpawn.prototype.createCustomCreep =
    function (energy, roleName) {
        // create a balanced body as big as possible with the given energy
        var numberOfParts = Math.floor(energy / 200);
        var body = [];
        for (let i = 0; i < numberOfParts; i++) {
            body.push(WORK);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(CARRY);
        }
        for (let i = 0; i < numberOfParts; i++) {
            body.push(MOVE);
        }

        // create creep with the created body and the given role
        return this.spawnCreep(body, undefined, { role: roleName, working: false });
    };


   

// ------------------------


    for (let spawnName in Game.spawns) {
        let spawn = Game.spawns[spawnName];
        let creepsInRoom = spawn.room.find(FIND_CREEPS);


        console.log('test');



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
                name = spawn.createminerCreep();
            }

            // Spawn Lorry
            else if (numberOfLorrys < spawn.memory.minLorrys) {
                // try to spawn one
                console.log('Lorrys PRIOTITY due to ' + numberOfLorrys + ' Lorrys');
                name = spawn.createlorryCreep();
            }


            // if not enough wallRepairers
            else if (numberOfWallRepairers < spawn.memory.minwallRepairers) {
                // try to spawn one
                console.log('Wall repairer selection ');
                name = spawn.createwallRepairerCreep();
            }
            // if not enough builders
            else if (numberOfBuilders < spawn.memory.minBuilders) {
                // try to spawn one
                console.log('Builder Selected ');
                name = spawn.createbuilderCreep();
            }
            // if not enough upgraders
            else if (numberOfUpgraders < spawn.memory.minUpgraders) {
                // try to spawn one
                console.log('Upgrader Selected ');
                name = spawn.createupgraderCreep();

            }
            // if not enough repairers
            else if (numberOfRepairers < spawn.memory.minRepairers) {
                // try to spawn one
                console.log('Repairer Selected ');
                name = spawn.createrepairerCreep();
            }

            // if not enough longDistanceHarvesters for E4N49
            else if (numberOfLongDistanceHarvestersE1N49 < spawn.memory.minlongDistanceHarvesterE1N49) {
                // try to spawn one
                console.log('LongDistance Harvester Selected ');
                name = spawn.createLongDistanceHarvester();
            }


            // print name to console if spawning was a success
            // name > 0 would not work since string > 0 returns false
            if (!(name < 0)) {
                console.log("Spawned new creep: " + name);
            }

        }
        console.log('End of Spawning Script reached');
    };
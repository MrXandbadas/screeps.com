var listOfRoles = ['harvester', 'lorry', 'claimer', 'upgrader', 'repairer', 'builder', 'wallRepairer'];

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
            return this.spawnCreep(body, undefined, { role: 'harvester', working: false });
        };


    // Create Harvester
    StructureSpawn.prototype.createharvesterCreep =
        function (target) {

            // create creep with the created body
            // 600 energy
            return this.createCreep([MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY], undefined, {
                role: 'harvester',
                home: 'E2N49',
                working: false,
                COC: 600
            });
           

        };


    // Lorry Creep
    StructureSpawn.prototype.createlorryCreep =
        function (target) {


            // create creep with the created body
            // 500 Energy
            return this.createCreep([MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY], undefined, {
                role: 'lorry',
                home: 'E2N49',
                sourceId: '',
                working: false,
                COC: '500'
            });
        };

    // Miner Creep
    StructureSpawn.prototype.createminerCreep =
        function (target) {


            // create creep with the created body
            // 750 Energy
            return this.createCreep([MOVE, WORK, WORK, WORK, WORK, WORK, WORK, WORK], undefined, {
                role: 'miner',
                home: 'E2N49',
                working: false,
                COC: 750
            });
        };

    //Long distance Harvester
    StructureSpawn.prototype.createLongDistanceHarvester =
        function (target) {
   

            // create creep with the created body
            // 800 Energy
            return this.createCreep([MOVE, MOVE, MOVE, MOVE, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY], undefined, {
                role: 'LongDistanceHarvester',
                home: 'E2N49',
                target: 'E4N49',
                sourceIndex: '',
                working: false,
                COC: 800
            });
        };

    // Repair
    StructureSpawn.prototype.createrepairerCreep =
        function (target) {


            // create creep with the created body
            //500 Energy
            return this.createCreep([MOVE, MOVE, MOVE, MOVE, WORK, WORK, CARRY, CARRY,], undefined, {
                role: 'repairer',
                home: 'E2N49',
                working: false,
                COC: 500
            });
        };

    // Upgrader

    StructureSpawn.prototype.createupgraderCreep =
        function (target) {


            // create creep with the created body
            // 400 Energy
            return this.createCreep([MOVE, MOVE, MOVE, WORK, CARRY, CARRY, CARRY], undefined, {
                role: 'upgrader',
                home: 'E2N49',
                working: false,
                COC: 400
            });
        };

    // Wall Repairer
    StructureSpawn.prototype.createwallRepairerCreep =
        function (target) {


            // create creep with the created body
            // 600 Energy
            return this.createCreep([MOVE, MOVE, MOVE, WORK, WORK, WORK, CARRY, CARRY, CARRY], undefined, {
                role: 'wallRepairer',
                home: 'E2N49',
                working: false,
                COC: 600
            });
        };

    // Builder
    StructureSpawn.prototype.createbuilderCreep =
        function (target) {


            // create creep with the created body
            // 600 Energy
            return this.createCreep([MOVE, MOVE, MOVE, WORK ,WORK ,WORK , CARRY, CARRY, CARRY], undefined, {
                role: 'builder',
                home: 'E2N49',
                working: false,
                COC: 600
            });
        };

    //Claimer
    StructureSpawn.prototype.createclaimer =
        function (target) {


            // create creep with the created body
            return this.spawnCreep([CLAIM, MOVE], undefined, {
                role: 'claimer', target: target,


            });
        };




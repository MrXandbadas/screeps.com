module.exports = function() {
    _ = require('lodash');
    baseVar = function() {
        var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps, minCounter, spawnMem, spM, calcSpawn, setMemorySpawn, aStage, stageUpdate,roleName,target, sourceIndex, HOME, selRoleName,workState, roleCount;


    }
    //please leave Harvester, upgrader and builder as the first 3
    baseVarRole = () => {
        selRoleName = [
            { role: 'harvester', roleCount: (_.sum(Game.creeps, (c) => c.memory.role == 'harvester'))},
            { role: 'upgrader', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')},
            { role: 'builder', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'builder')},
            { role: 'repairer', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'repairer')},
            { role: 'wallRepairer', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer')},
            { role: 'delivery', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'delivery')},
            { role: 'miner', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'miner')},
            { role: 'longDistance', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'longDistance')}
        ];

        

        roleNameaba = [];
      
        

    };

   
        /* 
        Please define new roles inside the roleName.push() array function
        */
        stageUpdate = function()  {
        }

        roleNameSet = function(spawnMem, roleName, roleNamex) {
            if (!(spawnMem.aStage != undefined)){
                spawnMem.aStage = 1;
            } 
            /* if (spawnMem.aStage == 1){
            for(let wqw = 0; wqw < roleNamex; ++wqw) {       let rolename = function() { roleName.shift()}
            }
            }*/
            // One use role
            //roleName.push('claimer');
        };

        /* Please define minimum number of Roles per room */

        setMemorySpawn = function(spawn) {
        
        spawnMem.stageChanger;
        spawnMem.roomName = spawn.room.name;

        spawnMem.myArr = [];
        // Change spawning stage in the memory (levels 1 && 2)

        spawnMem.selectedRole = [];

        //reFormatting
        if (!spawnMem.aStage) {
            spawnMem.aStage = 1;
            spawnMem.minBuilder = 1;
            spawnMem.minDelivery = 0;
            spawnMem.minMiner = 0;
            spawnMem.minUpgrader = 2;
            spawnMem.minRepairer = 1;
            spawnMem.minHarvester = 2;
            spawnMem.minWallRepairer = 0;
            spawnMem.minLongDistance = 3;
        }

        else if (spawnMem.aStage == 2){ 
            spawnMem.minBuilder = 1;
            spawnMem.minDelivery = 2;
            spawnMem.minMiner = 2;
            spawnMem.minUpgrader = 2;
            spawnMem.minRepairer = 2;
            spawnMem.minHarvester = 0;
            spawnMem.minWallRepairer = 1;
        };

        spawnMem.myEnergy = spawn.room.energyAvailable;
        spawnMem.myEnergyCap = spawn.room.energyCapacityAvailable;

        spawnMem.myEnergyIsFull = function () {
            if (spawnMem.myEnergy < spawnMem.myEnergyCap) {
                return false; 
            }
            else if (spawnMem.myEnergy == spawnMem.myEnergyCap) {return true;}
        }
        spM = spawnMem;
   };

   /* Please define any Role Counting var */
    countCreeps = function(){
        harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester'),
        upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader'),
        builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder'),
        repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer'),
        wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer'),
        deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery'),
        minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner'),
        longDistanceCount = _.sum(Game.creeps, (c) => c.memory.role == 'longDistance'),
        claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer');
        
    };

}; //end of export
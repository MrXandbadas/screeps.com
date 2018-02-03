module.exports = function() {
    _ = require('lodash');
    baseVar = function() {
    var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps, minCounter, spawnMem, spM, calcSpawn, setMemorySpawn, aStage, stageUpdate,roleName,target, sourceIndex, HOME, selRoleName, roleCount;
    }
    //please leave Harvester, upgrader and builder as the first 3
   baseVarRole = () => {
        selRoleName = [
            { role: 'harvester', currentRoom: '', roleCount: (_.sum(Game.creeps, (c) => c.memory.role == 'harvester'))},
            { role: 'upgrader', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')},
            { role: 'builder', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'builder')},
            { role: 'repairer', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'repairer')},
            { role: 'wallRepairer', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer')},
            { role: 'delivery', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'delivery')},
            { role: 'miner', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'miner')},
            { role: 'longDistance', currentRoom: '', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'longDistance')}

            ];

    


   

   roleName = [];

        };

    
/* 
Please define new roles inside the roleName.push() array function
*/
stageUpdate = function()  {




}

roleNameSet = function(spawnMem, roleName, roleNamex) {
    if (!(spawnMem.aStage != undefined)){
        spawnMem.aStage = 1 ;
    } 
   /* if (spawnMem.aStage == 1){
        for(let wqw = 0; wqw < roleNamex; ++wqw) {       let rolename = function() { roleName.shift()}
        }
        
}*/
    else if (spawnMem.aStage == 2){
        //console.log('SpawnMem Stage at 2!!');

    }



// One use role
//roleName.push('claimer');
    };

/* Please define minimum number of Roles per room */

setMemorySpawn = function(spawn) {
    spawnMem.minBuilder = 1;
    spawnMem.minDelivery = 2;
    spawnMem.minMiner = 2;
    spawnMem.minUpgrader = 1;
    spawnMem.minRepairer = 1;
    spawnMem.minHarvester = 2;
    spawnMem.minWallRepairer = 1;
    spawnMem.stageChanger;
    spawnMem.roomName = spawn.room.name;


    spawnMem.myArr = [];

    spawnMem.aStage = 1;
    spawnMem.selectedRole = [];
    if (spawnMem.aStage == 2){ 
    spawnMem.minBuilder = 1;
    spawnMem.minDelivery = 2;
    spawnMem.minMiner = 2;
    spawnMem.minUpgrader = 1;
    spawnMem.minRepairer = 2;
    spawnMem.minHarvester = 2;
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
harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester', Game.creeps.room == spawn.room),
upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader', Game.creeps.room == spawn.room),
builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder', Game.creeps.room == spawn.room),
repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer', Game.creeps.room == spawn.room),
wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer', Game.creeps.room == spawn.room),
deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery', Game.creeps.room == spawn.room),
minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner', Game.creeps.room == spawn.room),
longDistanceCount = _.sum(Game.creeps, (c) => c.memory.role == 'longDistance', Game.creeps.room == spawn.room),
claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer', Game.creeps.room == spawn.room);
};

notDebug = function(spawn, allMyCreeps) {
    console.log(spawn ,'--- Not just a Debug 😉 ---');
    console.log(spawn.spawning, 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
    console.log('-----Creep Count--------')
    console.log(harvesterCount, '/', spawn.memory.minHarvester, ' Harvesters');
    console.log(upgraderCount, '/', spM.minUpgrader, ' Upgraders');
    console.log(builderCount, '/', spM.minBuilder, ' Builders');
    console.log(repairerCount, '/', spM.minRepairer, ' Repairers');
    console.log(deliveryCount, '/', spM.minDelivery, ' Delivery');
    console.log(minerCount, '/', spM.minMiner, ' Miner');
   // console.log(longDistanceCount, '/', JSON.stringify(selRoleName.role[7].name));
    console.log('-------------');
};


}; //end of export
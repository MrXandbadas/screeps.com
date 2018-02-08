module.exports = function() {
    _ = require('lodash');

   convert = function(input) {
        return this.JSON.stringify(input);
    },

    baseVar = function() {
    var creep, creepRole, spawn, name, runRole,  selectedRole, energy, creepName, energyCap, allMyCreeps, minCounter, spawnMem, spM, calcSpawn, setMemorySpawn, aStage, stageUpdate,roleName,target, sourceIndex, HOME, selRoleName, roleCount;
    },
    //please leave Harvester, upgrader and builder as the first 3
   baseVarRole = function(spawn) {

    if (!spawn) {
        spawnMem = creep.room.name
    } else {
        spawnMem = spawn.room.name;
    }
       
    
        selRoleName = [
            { role: 'harvester', currentRoom: spawnMem, roleCount: (_.sum(Game.creeps, (c) => c.memory.role == 'harvester'))},
            { role: 'upgrader', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')},
            { role: 'builder', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'builder')},
            { role: 'repairer', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'repairer')},
            { role: 'wallRepairer', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer')},
            { role: 'delivery', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'delivery')},
            { role: 'miner', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'miner')},
            { role: 'longDistance', currentRoom: spawnMem, roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'longDistance')}

            
            ];

    


   
            let rN = selRoleName;
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
    spM = spawnMem;

    if (spawn.memory.aStage == undefined ) {
        console.log('who isadad ', spawn.name)

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

   }
};

   /* Please define any Role Counting var */
countCreeps = function(spawn){
    spawnMem = spawn.memory;
spawnMem.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.longDistanceCount = _.sum(Game.creeps, (c) => c.memory.role == 'longDistance', (c) => c.memory.currentRoom == spawn.room.name),
spawnMem.claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer', (c) => c.memory.currentRoom == spawn.room.name);
};

notDebug = function(spawn, allMyCreeps) {
    console.log(spawn ,'--- Not just a Debug 😉 ---');
    console.log(JSON.stringify(spawn.spawning) , 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
    console.log('-----Creep Count--------')
    console.log(spM.harvesterCount, '/', spM.minHarvester, ' Harvesters');
    console.log(spM.upgraderCount, '/', spM.minUpgrader, ' Upgraders');
    console.log(spM.builderCount, '/', spM.minBuilder, ' Builders');
    console.log(spM.repairerCount, '/', spM.minRepairer, ' Repairers');
    console.log(spM.deliveryCount, '/', spM.minDelivery, ' Delivery');
    console.log(spM.minerCount, '/', spM.minMiner, ' Miner');
   //console.log(longDistanceCount, '/', JSON.stringify(selRoleName.role[7].name));
    console.log('-------------');
};


}; //end of export


//please leave Harvester, upgrader and builder as the first 3
exports.baseVarRole = () => {
var selRoleName;
    return selRoleName = [
        { role: 'harvester', roleCount: (_.sum(Game.creeps, (c) => c.memory.role == 'harvester'))},
        { role: 'upgrader', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'upgrader')},
        { role: 'builder', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'builder')},
        { role: 'repairer', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'repairer')},
        { role: 'wallRepairer', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer')},
        { role: 'delivery', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'delivery')},
        { role: 'miner', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'miner')},
        { role: 'longDistance', roleCount: _.sum(Game.creeps, (c) => c.memory.role == 'longDistance')} ]

    }



    /* 
    Please define new roles inside the roleName.push() array function
    */
   exports.stageUpdate = function()  {
    },

    exports.roleNameSet = function(spawnMem, roleName, roleNamex) {
        if (!(spawnMem.aStage != undefined)){
            spawnMem.aStage = 1;
        } 
        /* if (spawnMem.aStage == 1){
        for(let wqw = 0; wqw < roleNamex; ++wqw) {       let rolename = function() { roleName.shift()}
        }
        }*/
        // One use role
        //roleName.push('claimer');
    },

    /* Please define minimum number of Roles per room */

    

    exports.countCreeps = function () {
        const countCreeps = [];
        
        let 
        upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader'),
        builderCount = _.sum(Game.creeps, (c) => c.memory.role == 'builder'),
        repairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'repairer'),
        wallRepairerCount = _.sum(Game.creeps, (c) => c.memory.role == 'wallRepairer'),
        deliveryCount = _.sum(Game.creeps, (c) => c.memory.role == 'delivery'),
        minerCount = _.sum(Game.creeps, (c) => c.memory.role == 'miner'), 
        longDistanceCount = _.sum(Game.creeps, (c) => c.memory.role == 'longDistance'),
        claimerCount = _.sum(Game.creeps, (c) => c.memory.role == 'claimer')

        countCreeps.push('harvesterCount');
        countCreeps.harvesterCount = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
        countCreeps.push('upgraderCount');
        countCreeps.upgraderCount = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
        countCreeps.push({builderCount});
        countCreeps.builderCount = builderCount
        countCreeps.push({repairerCount});
        countCreeps.repairerCount = repairerCount;
        countCreeps.push({wallRepairerCount});
        countCreeps.wallRepairerCount = wallRepairerCount;
        countCreeps.push({minerCount});
        countCreeps.minerCount = minerCount;

        return countCreeps;
    }


    exports.setMemSpawn = function(spawn) {
    var spawnMem = spawn.memory;
    spawnMem.usrSettings = {};
        let usrSet = spawnMem.usrSettings;

    if (usrSet.initRunComplete != true) {

        spawnMem.stageChanger;
        spawnMem.roomName = spawn.room.name;
        
        usrSet.repopMaxAmmount = 4;
        usrSet.minCreep = {};
            let setMCreep = usrSet.minCreep;
        usrSet.programLevel = 1;
        spawnMem.usrSettings.repopulation = true;
            
            setMCreep.minHarvester = 2;
            setMCreep.minBuilder = 0;
            setMCreep.minMiner = 0;
            setMCreep.minRepairer = 0;
            setMCreep.minUpgrader = 0;
            setMCreep.minDelivery = 0;
            

            usrSet.initRunComplete = true;


    //


    }
}

    exports.creepMemSpawn = function(spawn) {
let spM = spawn.memory.usrSettings.roomHandler;


if (spM.initRun =! true) {
    spm.creepsHarvest;
    

    spM.initRun = 'true';

}

        let selectedSource = spawn.memory.usrSettings.roomHandler
// future if statement wrapped around the workstate var for moving into the next level of spawn
        var workState = {};
            workState.harvestingSource = 'true',
            workState.harvestingSourceID = selectedSource,
            workState.upgradingAttempt = 'false', 
            workState.upgradingSourceID = 'fill',
            workState.deliveryToStructure = 'false', 
            workState.deliveryToStructureID = 'fill',
            workState.buildingStructure = 'false', 
            workState.buildingStructureID = 'fill',
            workState.repairing = 'fill', 
            workState.repairingID = 'fill',
            workState.creepBirthRole = 'fill', 
            workState.oldJob = 'fill',
            workState.jobToggle = 0
    
        

        var memT1 = {
            role: '',
            jobTask: workState



        };
        var memT2 = {};



return memT1;
    
        };
    // Change spawning stage in the memory (levels 1 && 2)


    /*//reFormatting
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
    }*/

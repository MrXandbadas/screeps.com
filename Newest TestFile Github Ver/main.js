
var usrFnc = require('prototype.usrfnc');
var roleArray = [
    role = {   
        roleName: 'harvester',
        selectedRole: () => {
            let creepName = 'harvester' + Game.time;
           return creepName;
        }               
            },
    role = {
        roleName: 'upgrader',
        creepRoomCounter: {}
            },
    role = {
        roleName: 'builder',
        creepRoomCounter: {}
            },
    
    role = {
        roleName: '',
        creepRoomCounter: {}
            },
    role = {
        roleName: '',
        creepRoomCounter: {}
            },
    role = {
        roleName: '',
        creepRoomCounter: {}
            }
        
    
       ];

module.exports.loop = function () {

    usrFnc.baseVar //calling set of base variables 


    for (let name in Game.creeps) {
        var creepExt;
        //var definitions for each creep
        creep = Game.creeps[name];
        creep.memory.currentRoom = creep.room.name;
        roleName = creep.memory.role;
        require('prototype.creep')(creep);
        usrFnc.roleCall(creep,roleName);
        
        //console.log(creep.memory.jobTask[1].harvestingSource)

        
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
            
        }
        


    }


    for (let i in Game.spawns) {
        
        spawn = Game.spawns[i];
        require('prototype.spawn')();
        
        var energy = spawn.room.energy;

        if (!(spawn.spawning == null)) {
            

        
        } else {

            if (spawn.memory.repopulation == undefined) {
                spawn.memory.repopulation = 'true';
            }
   
if (spawn.memory.repopulation == 'true') {

            var energy = spawn.room.energy;
            let creepName = 'Upgrader ' + Game.time;
            var workState = [
                {harvestingSource: 'false', harvestingSourceID: ''},
                {upgradingAttempt: 'false', upgradingSourceID: ''},
                {deliveryToStructure: 'false', deliveryToStructureID: ''},
                {buildingStructure: 'false', buildingStructureID: ''}
        
            ];
           name = spawn.usrfncHarvester(energy,creepName,'upgrader',workState);
           spawn.memory.repopulation = 'false';
            //console.log(name)
        }
 
        
    } //end of else
}
   





              };
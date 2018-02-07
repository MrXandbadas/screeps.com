
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

       var workState = [
        {harvestingSource: 'true', harvestingSourceID: ''},
        {upgradingAttempt: 'false', upgradingSourceID: ''},
        {deliveryToStructure: 'false', deliveryToStructureID: ''},
        {buildingStructure: 'false', buildingStructureID: ''}

    ];

module.exports.loop = function () {

    usrFnc.baseVar //calling set of base variables 


    for (let name in Game.creeps) {
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
            if (Game.creeps[name].memory.role != undefined && Game.creeps[name].ticksToLive < 100) {
                Game.creeps[name].memory.homeDeath = 'true';
            }

            
        }
        
        //var definitions for each creep
        creep = Game.creeps[name];

        creep.memory.currentRoom = creep.room.name;
        roleName = creep.memory.role;
        require('prototype.creep')(creep);
        console.log(roleCounter)
        
        //console.log(creep.memory.jobTask[1].harvestingSource)

        

        


    }


    for (let i in Game.spawns) {
        
        
        spawn = Game.spawns[i];
        require('prototype.spawn')();
        
        var energy = spawn.room.energy;
        console.log(Game.creeps.length)
        if (!(spawn.spawning == null)) {
            
            
        
        } else {



            if (spawn.memory.repopulation == undefined) {
                let abvar = Game.spawns.room;
                spawn.memory.repopulation = [ { toggle: 'false'} ];
            } 

   
       else if (spawn.memory.repopulation[0].toggle == 'true') {
           
        var energy = spawn.room.energy;



    if (spawn.memory.repopulation[0].numberOfCreeps == undefined) {
        
        spawn.memory.repopulation[0].numberOfCreeps = [];
        let numOCreeps = spawn.memory.repopulation[0].numberOfCreeps
        let creepName = 'harvester ' + Game.time;
        name = spawn.usrfncHarvester(energy,creepName,'harvester',workState)
        numOCreeps.push(roleHarvesterCount = (creep.memory.roleName, _.sum(Game.creeps, (c) => c.memory.role == 'harvester')));
    } else if (!(spawn.memory.repopulation[0].numberOfCreeps == undefined)) {
        spawn.memory.repopulation[0].numberOfCreeps = [];
        let numOCreeps = spawn.memory.repopulation[0].numberOfCreeps
        let creepName = 'harvesterMan! ' + Game.time;
        name = spawn.usrfncHarvester(energy,creepName,'harvester',workState)
        numOCreeps.push(roleHarvesterCount = (creep.memory.roleName, _.sum(Game.creeps, (c) => c.memory.role == 'harvester')));
        console.log('yeah')

        

    }

    

        spawn.memory.repopulation[0].toggle = false;
    } else {console.log(spawn.memory.repopulation.numberOfCreeps, 'hiao')

console.log(Game.creeps.length)



}

            
            



        /*if (creepExt.creepCounter(creep)) {
         } else {
               name = spawn.usrfncHarvester(energy,creepName,'builder',workState);
           }*/
           //spawn.memory.repopulation = 'false';
            //console.log(name)
    
        
       // console.log(creep)
    } //end of else
}
   





              };
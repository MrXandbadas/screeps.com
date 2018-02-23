require('screeps-perf')({
    speedUpArrayFunctions: true,
    cleanUpCreepMemory: true,
    optimizePathFinding: false
  });
  _ = require('lodash');
  var roomHandle = require('prototype.roomHandler')
const baseSetting = require('prototype.varconfig') // Access to  SetMemSpawn
const usrSpawn = require('prototype.spawn');

  const mySpawnFunc = () => {


    for (let spawnName in Game.spawns){
        const spawn = Game.spawns[spawnName];
        baseSetting.setMemSpawn(spawn);
        const creepCount = baseSetting.countCreeps();    
        roomHandle.energySourceVar(spawn);
        
        usrSpawn.calcSpawn(spawn, creepCount)



        


        
        //let spawnMem = spawn.memory;
       /* confi.setMemorySpawn(spawn,spawnMem);
        confi.roleNameSet(spawnMem);
        spawnpro.calcSpawn(spawn,spawnMem); //spawning process
        name = undefined;
        //debug1(spawn, allMyCreeps, energy);
        // spawn.spawning is spawning someone. ! means not
        if (!(spawn.spawning == null)) {

            debug(spawn, allMyCreeps);
        } // end of !(spawn.spawning)*/

    
};


};

const myCreepFunc = () => {

    var workTime = require('prototype.creep.workActions');

    for (let creepName in Game.creeps) {
        let creep = Game.creeps[creepName];
        let creepRole = creep.memory.role;
        baseSetting.countCreeps();
        const creepCurrentRoom = creep.room;
        console.log(creep, ' ', creepCurrentRoom)
        workTime.averageWorker(creep, creepRole)
        creep.harvestTask(creep);

        

        
    };
};

const myLog = (arg, arg2) => {

   // console.log(arg, arg2);
}


  module.exports.loop = function () {
    function* runMain() {
        let spawn, creep;
        //console.log('hi im here generatnig')
        
        //console.log(JSON.stringify(mySpawnFunc()))
        const spawnOut = yield mySpawnFunc(); 
        console.log(spawn, ' is my return')
       
        myCreepFunc();

        let name = undefined;
        
        
        const creepCheck = yield myLog('creepCheck', 'ye')

        myLog('before',''); yield myLog('again','');

        

        }
    const genRun = runMain();
    

 // end of CreepCheck Const

// console.log(genRun.next())
genRun.next('test');
//genRun.next('passYield1')
//genRun.next('test')
console.log(JSON.stringify(genRun.next()))
//genRun.next();



  };
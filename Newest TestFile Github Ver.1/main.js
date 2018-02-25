require('screeps-perf')({
    speedUpArrayFunctions: true,
    cleanUpCreepMemory: true,
    optimizePathFinding: false
  });
  _ = require('lodash');
  var roomHandle = require('prototype.roomHandler')
const baseSetting = require('prototype.varconfig') // Access to  SetMemSpawn
const usrSpawn = require('prototype.spawn');

const checkOnInit = () => {
//Implement a room Searching function to see if the room has gone through the initalisation stage :D
//for now just a console log
console.log('init stage reached, needs dev line 11-14 @main.js')

}


  const mySpawnFunc = () => {
let myOutput = [];

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
        myOutput.push(spawn);
        return myOutput; //returning the spawn object in an array
    
};
    return myOutput; // returning the spawn object in an array

}; // end of mySpawnFunc

const myCreepFunc = (mySpawns) => {

    //mySpawns Obj is an array with the users avaliable spawns.

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
}; //end of myCreepFunc, which takes the spawn object.

const myLog = (arg, arg2) => {

   console.log(arg, arg2);
}


  module.exports.loop = function () {
    function* runMain() {
        
        let spawn, creep;
        var mySpawns = mySpawnFunc();
        
        console.log('start of Generator --------------')
        checkOnInit(); yield  //to stop an overflow attemt while delcairing
        
        
        
        /* FOAMING AT MOUTH
        
        yield* anotherGenerator()
        
        will pause this generator and wait till the next generator is complete, then resume!!!
        Most things can be generators no?
        */
        console.log('before first yield')
        console.log('-------')
        
        //console.log(JSON.stringify(mySpawnFunc()))
        const spawnOut = yield mySpawns 
        myCreepFunc(mySpawns);
        console.log(mytestVar)
        

        let name = undefined;
        
        
        const creepCheck = yield myLog('creepCheck', 'ye')

        myLog('before',''); yield myLog('again','');

        

        }
    const genRun = runMain();
    const genVal = genRun.next().value;
    

 // end of CreepCheck Const


console.log('SPAWN with value? ',JSON.stringify());
//console.log(JSON.stringify(spawn, genRun.next()))
//genRun.next('passYield1')
//genRun.next('test')
//genRun.next();
var spawnObj;
spawnObj = genRun.next().value;
genRun.next(spawnObj)




  };
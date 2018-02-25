const baseSetting = require('prototype.varconfig');
    
    let calcSpawn, spawningMessage,creepName;
    exports.calcSpawn = function(spawn,creepCount) {
        let name = undefined;
        var spawnMem = spawn.memory;

        function harvester1Spawn( ) {
            
            creepName = 'Basic Work Creep: ' + Game.time;
            name = spawn.backupHarvester(creepName,spawn);
             
        }
        function longDistance1Spawn( ) {
            creepName = ' Weary Traveler: ' + Game.time; 
    
                    name = spawn.createCreepLongDistance(energy, 'longDistance', creepName);
                  
                    console.log(name) //LOG HERE! -- For future Refference
        }
    
        //Function spawningMessage
        function spawningMessage(){
            // Give a message when spawning someone
            /*if(spawn.spawning) {
                var spawningCreep = Game.creeps[spawn.spawning.name];
                 new RoomVisual(spawn.room.name).text('Spawning a ' + spawn.spawning.name,
                spawn.pos.x + 1,
                spawn.pos.y,
            {align: 'left', opacity: 0.8});}*/
        }


           // function userSpawn
       function usrSpawn(spawn){
        name = spawn.createClaimer();
       }


        // End of Function Definitions

        const minCreep = spawnMem.usrSettings.minCreep;

       if (spawnMem.usrSettings.repopulation == undefined) {
console.log('repopulation is Undefined!')
        
       }
       else if (spawnMem.usrSettings.repopulation == true) {
           if (creepCount.totalCreepCount == 0){
            harvester1Spawn( )
           }
        
        if (creepCount.totalCreepCount < minCreep.totalCreepCount) {

    
                harvester1Spawn( ) 
                 
            

                       
        }
        else {

            console.log('==== Not my best debugging tbh ====')
            console.log('I HAVE ' + creepCount.totalCreepCount + ' OUT OF ' + JSON.stringify(minCreep))
        console.log(JSON.stringify(creepCount))
        console.log('==== Not my best debugging tbh ====')
        }
    
    }
    },
     // return  .       

        
 


       StructureSpawn.prototype.createClaimer = function (creepName) {
            
         return this.spawnCreep([WORK,CLAIM,CARRY, MOVE], creepName, { memory: {
             role: 'claimer', target: 'E3N48'
         }
        });
    };


    const spawn = Game.spawns['Spawn1'];

    StructureSpawn.prototype.backupHarvester = function (creepName,spawn) {
        
    let numberOfParts = Math.floor(300 / 200);
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
     return this.spawnCreep(body, creepName, { 
         memory: baseSetting.creepMemSpawn(spawn) });
};

    StructureSpawn.prototype.createCreepType1 = function (energy, roleName, creepName) {


        let numberOfParts = Math.floor(energy / 200);
        var body = [];
        for (let qwq = 0; qwq < numberOfParts; qwq++) {
            body.push(WORK);
        }
        for (let qwq = 0; qwq < numberOfParts; qwq++) {
            body.push(CARRY);
        }
        for (let qwq = 0;qwq< numberOfParts; qwq++) {
            body.push(MOVE);
        }          
         return this.spawnCreep(body, creepName, { memory: {
             role: roleName, jobTask: workState, home: spawn.room.name 
         }
            });    
    
        };

        StructureSpawn.prototype.createMiner1 = function (energy, roleName, creepName) {
    
                  
         return this.spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], creepName,
                                    { memory: { role: 'miner'} });
        
   };

    StructureSpawn.prototype.createCreepTypeNoWork = function (energy, roleName, creepName) {


            let numberOfParts = Math.floor(energy / 200);
            var body = [];
            for (let qwq = 0; qwq < numberOfParts; qwq++) {
                body.push(CARRY);
            }

            for (let qwq = 0;qwq< 2; qwq++) {
                body.push(MOVE);
            }          
             return this.spawnCreep(body, creepName, { memory: {
                 role: roleName,
                 working: false 
             }
                });    
        
            };
    StructureSpawn.prototype.createCreepTypeCarryMove = function (energy, roleName, creepName) {


                let numberOfParts = Math.floor(energy / 200);
                var body = [];
                body.push(WORK);
                for (let qwq = 0; qwq < numberOfParts; qwq++) {
                    body.push(CARRY);
                }
                for (let qwq = 0;qwq< numberOfParts; qwq++) {
                    body.push(MOVE);
                }          
                 return this.spawnCreep(body, creepName, { memory: {
                     role: roleName,
                     working: false,
                     sourceID: '' 
                 }
                    });    
            
                };
                StructureSpawn.prototype.createCreepLongDistance = function (energy, roleName, creepName) {


                    let numberOfParts = Math.floor(900 / 200);
                    var body = [];
                    for (let qwq = 0; qwq < numberOfParts; qwq++) {
                        body.push(WORK);
                    }
                    for (let qwq = 0; qwq < numberOfParts; qwq++) {
                        body.push(CARRY);
                    }
                    for (let qwq = 0;qwq< numberOfParts; qwq++) {
                        body.push(MOVE);
                    }          
                     return this.spawnCreep(body, creepName, { memory: {
                         role: roleName,
                         working: false,
                         home: spawnMem.roomName, 
                         target: 'E2N48',
                         sourceIndex: ''
                }
            });    
                
        };


var usrfnc = {

    

    baseVar:()=>{
        var creep, creepRole,
        creepName,allMyCreeps,name,spawn,
        spawnMemClear,spM,calcSpawn,setMemorySpawn,
        runRole,selectedRole,roleName,roleCount,roleCall,
        home,target,sourceIndex,energy,energyCap
         
        },
        //
        newRoleSorter: function(baseVarRole) {
            for (let indexa = 0; indexa < baseVarRole.length; ++indexa) {
                let rN = baseVarRole;
                var al = rN[indexa];

                if (al == undefined) {
                    let al = 'test';
                console.log(al)
                }
                //var ab = al.role;
                
               
                
                
                
                };
                
        },





    convert: function (testarray) {
        let returnArray = [];
//returns a string version easily acessable
        for (let index = 0; index < testarray.length; index++) {
         let convertify = testarray[index];
        returnArray.push(JSON.stringify(convertify));
        console.log(index, '  ', returnArray)
        }

    },

    creepCounter: function(spawn,roleArray) {
        //for loop saying for every creep (role array) push the sum of the array to a creep Counter
                for (let index = 0; index < roleArray.length; index++) {
                   let creepCounter = [];
                   creepCounter.push(_.sum(Game.creeps, (c) => c.memory.role == roleArray[index]));
                   
                    return spawn.memory.countCreeps = JSON.stringify(creepCounter);
                }
            },
    
   roleCall: function(creep,roleName) {
       let jobtask = creep.memory.jobTask;
       let myRoleis = creep.memory.role;
                if (roleName == 'harvester') {
                   if (jobtask.workingJob == undefined) {
                    return jobtask.workingJob = false;
                   };
                   if (jobtask.workingJob.myRoleis == undefined) {
                    return jobtask.workingJob.myRoleis = true;
                   };
                }
                else if (roleName == 'upgrader') {
                    if (jobtask.workingJob == undefined) {
                        return jobtask.workingJob = false;
                    };
                    if (jobtask.workingJob.myRoleis == undefined) {
                        return jobtask.workingJob.myRoleis = true;
                    };
                }
                else if (roleName == 'builder') {
                    if (jobtask.workingJob == undefined) {
                        jobtask.workingJob = false;
                    };
                    if (jobtask.workingJob.myRoleis == undefined) {
                     jobtask.workingJob.myRoleis = true;
                    };
                }
                else if (roleName == 'repairer') {
                    if (jobtask.workingJob == undefined) {
                        jobtask.workingJob = false;
                    };
                    if (jobtask.workingJob.myRoleis == undefined) {
                     jobtask.workingJob.myRoleis = true;
                    };
                }
            }



};

module.exports = usrfnc;
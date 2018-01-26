//var _ = require('lodash');


var yes = 'tru';


module.exports.loop = function () {

    var debug = {
        log: function () {
            console.log(JSON.stringify(this));
        },
        test: 'test'

    };
    console.log('test');
    debug.log();


 /*   
    var sum = 0;
    var number = 1;
    do {
        sum += number;
        console.log('Sum: ', sum);// -- body
        number++;
        console.log('number ', number);// -- updater
    } while (number <= 4);   // -- condition
    debug.debug("Sum = " + sum); */
    //quickstart room




   // let room1 = Game.spawns.rooms.(0)
  //  let homeSpawn = Game.spawns.(0)
    
   
    

    // What im trying to do 

    /*
    Idont know
    I should be trying to just pull the array into a object  D:

    */
    /*
    const usrFnc = {};
    var spawndebug = Game.spawns;
    console.log('getpoint1');
    var homeSpawn = function (usrFnc) {
        console.log('getpoint2');
        if (usrFnc.homeSpawn === undefined) {
            console.log('testingpoint3');
            return usrFnc.spawn;
        }
    };
   homeSpawn();

 */
        
 //   console.log('spawn return ', JSON.stringify(homeSpawn.spawn, null, 2));

/*
    var testphase0 = function () {
    rol
}

   if (go === 'true') {

       testphase();

   };


    (FIND_STRUCTURES, {
                filter: s => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                    s.store[RESOURCE_ENERGY] > 0
            })



    */






  /*  var testphase = function () {
        require('prototype.spawntest')();

        //roleSelection = prototype.spawncreep();
        //listOfRoles.roleSelection = 'test000',

        console.log('get to testphase!');



        /* function(runrole) {
             if (creep.memory.role == 'upgrader') {
                 roleUpgrader.run(creep);
             };
         }*/



   /*     var logtime = function () { 
        var output1 = JSON.stringify(listOfRoles.roleSelection);
        var output2 = JSON.stringify(listOfRoles.roleRun);
        var output3 = JSON.stringify(listOfRoles.delivery);
        var output4 = JSON.stringify(listOfRoles.repairer);
        var output5 = JSON.stringify(listOfRoles.builder);
        var output6 = JSON.stringify(listOfRoles.wallUpgrader);
        var output7 = JSON.stringify(listOfRoles.upgrader);
        var output8 = JSON.stringify(listOfRoles.claimer);


        var consolearray = {
            d1: console.log(output1);
            d2: console.log(output2);
            d3: console.log(output3);
            d4: console.log(output4);
            d5: console.log(output5);
            d6: console.log(output6);
            d7: console.log(output7);
            d8: console.log(output8);
        };
    };



};
/*
    if (go === 'true') {

        
        var = logMax = 8
        var logcount = {}
        for (let i = 0; i < logMax; i++) {
            logCount.push(TESTING);
            logCount.push([i])
        }


    }
    */



   
};
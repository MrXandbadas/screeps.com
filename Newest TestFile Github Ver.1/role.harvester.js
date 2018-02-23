
module.exports = {

run: function (creep) {
    // go here kodie W38N27
    var workAction = require('prototype.creep.workActions');
    
/*
    gen = function* (){
        var obj ={};
            var testArray = [];
            testArray.harvester = 1;
            testArray.upgrader = 2;
            testArray.builder = 1;
        var priorityRO = testArray; //Priority Role Order
        yield priorityRO.shift();
        yield obj;
        console.log('pear');
    }
    
    var myGen = gen();
    myGen.next();
    console.log(JSON.stringify(myGen.next()));
*/



    
    //console.log(JSON.stringify(creep.memory.jobTask))

    /**/

   /* if (creepMemBirthRole == undefined || creepMemBirthRole === undefined) {
        let quickTemp = creep.memory.role;
        let quickArr = [];
        quickArr.push(quickTemp)
        creepMemBirthRole = quickArr.pop();
       
    }*/ 

    // basicWork will mean this creep will harvest energy and deliver to spawn buildings, otherwise they will upgrade, buil
    //workAction.creepBasicWork(creep);    
    ///
    
    






/*
        creepMemDelivery = 'false';
        creepMemHarvestSource = 'false';
        let roleBuilder = require('role.builder');
  roleBuilder.run(creep);*/
       /* else if () {
            
            let roleBuilder = require('role.builder');
            roleBuilder.run(creep);


       }*/



    } // end of run function

   



};

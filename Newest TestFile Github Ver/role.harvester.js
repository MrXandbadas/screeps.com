
module.exports = {

run: function (creep) {
    
    var workAction = require('prototype.creep.workActions');


    
    //console.log(JSON.stringify(creep.memory.jobTask))

    /**/

    if (creepMemBirthRole == undefined || creepMemBirthRole === undefined) {
        let quickTemp = creep.memory.role;
        let quickArr = [];
        quickArr.push(quickTemp)
        creepMemBirthRole = quickArr.pop();
        
    }

    // basicWork will mean this creep will harvest energy and deliver to spawn buildings, otherwise they will upgrade, buil
    workAction.creepBasicWork(creep);    
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

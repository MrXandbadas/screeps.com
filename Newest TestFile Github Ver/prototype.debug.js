module.exports= function(){
    debug = function(spawn, allMyCreeps, energy) {
        console.log('----- Not just any Debug 😉 -----');
        console.log('Time is: ',Game.time);
        console.log('------CPU Usage--------');
        console.log ('CPU Limit = ' + Game.cpu.limit);
        console.log('Cpu limit on this tick: ' + Game.cpu.ticklimit);
        console.log('------Base Level--------');
        console.log('Base Stage at level: ' + spawnMem.aStage + '!! Change Base stage in Memory.');
        console.log('------Energy Count--------');
        console.log('Amount of Energy available: '+ energy + '!!'); 
        console.log(spawn.spawning.name, 'will be spawned by ', spawn.spawning.remainingTime + Game.time, ' | Total Creeps: ', allMyCreeps);
        console.log('------Creep Count--------');
        console.log(harvesterCount, '/', spawn.memory.minHarvester, ' Harvesters');
        console.log(upgraderCount, '/', spawnMem.minUpgrader, ' Upgraders');
        console.log(builderCount, '/', spawnMem.minBuilder, ' Builders');
        console.log(repairerCount, '/', spawnMem.minRepairer, ' Repairers');
        console.log(deliveryCount, '/', spawnMem.minDelivery, ' Delivery');
        console.log(minerCount, '/', spawnMem.minMiner, ' Miner');
        // console.log(longDistanceCount, '/', JSON.stringify(selRoleName.role[7].name));
        console.log('------End of Debug-------');
    };

    //adding second debug menu for live debugging with easy toggles. This is the start of moving this into functions and modularizing the sheit otta debug

    debug1 = function(spawn, allMyCreeps, energy) {
        let CPUTOGGLE = 'on'
        let BASELEVEL = 'off'

console.log(Game.cpu.bucket)
        console.log('----- Not just any Debug 😉 -----');
        console.log('                                       ')
        console.log('Time is: ',Game.time);

        if (CPUTOGGLE == 'on'){
        console.log('------CPU Usage--------');
        console.log ('CPU Limit = ' + Game.cpu.limit);
        console.log('Cpu limit on this tick: ' + Game.cpu.tickLimit);
        
        if(Game.cpu.bucket == '10000'){
            console.log('Cpu Bucket: ' + Game.cpu.bucket + ' Full' )
        } else {
        console.log('Cpu Bucket: ' + Game.cpu.bucket + '/10000')}
        }
        if (BASELEVEL == 'on'){
        console.log('------Base Level--------');
        console.log('Base Stage at level: ' + spawnMem.aStage + '!! Change Base stage in Memory.');
        }

        console.log('------Energy Count--------');
        console.log('Amount of Energy available: '+ energy + '!!'); 
        console.log('------Creep Count--------');
        console.log('Total Creeps: ', allMyCreeps);
        console.log(harvesterCount, '/', spawn.memory.minHarvester, ' Harvesters');
        console.log(upgraderCount, '/', spawnMem.minUpgrader, ' Upgraders');
        console.log(builderCount, '/', spawnMem.minBuilder, ' Builders');
        console.log(repairerCount, '/', spawnMem.minRepairer, ' Repairers');
        console.log(deliveryCount, '/', spawnMem.minDelivery, ' Delivery');
        console.log(minerCount, '/', spawnMem.minMiner, ' Miner');
        // console.log(longDistanceCount, '/', JSON.stringify(selRoleName.role[7].name));
        console.log('------End of Debug-------');
        console.log('                                       ')
                console.log('                                       ')
    };
};

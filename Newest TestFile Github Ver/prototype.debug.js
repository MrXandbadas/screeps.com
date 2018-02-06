module.exports= function(){
    //basevar();
    debug = function(spawn, allMyCreeps, energy) {
        console.log('----- Not just any Debug 😉 -----');
        console.log('Time is: ',Game.time);
        console.log('------CPU Usage--------');
        console.log ('CPU Limit = ' + Game.cpu.limit + 'Cpu limit on this tick: ' + Game.cpu.ticklimit);
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
};

module.exports = {

//var usrFnc = {};//do i move this? hmm...
 //array







 spawnListUpdate: function() {

    if (harvesterCount < minHarvesters) {
        spawnList.unshift('harvester')
    }
    else if (upgraderCount < minUpgrader) {
        spawnList.push('upgrader')
    }
    else if (builderCount < minBuilder) {
        spawnList.push('builder')
    }
    else if (minerCount < minMiner) {
        spawnList.push('miner')
    }
    else if (deliveryCount < minerCount) {
        spawnList.unshift('delivery')
        //im pushing delivery creeps to the front of the spawning array here. To ensure that the number of delivery creeps is atleast matched to that of the miners . Eventually want to work out a 2 to 1 ratio with delivery and miners.
    }
    else if (repairerCount < minRepairer) {
        spawnList.push('repairer')
    }
    else if (wallRepairerCount < minwWallRepairer) {
        spawnList.push('wallRepairer')
    }

     console.log('made it to 1')
     console.log(JSON.stringify(spawnList))
}


};
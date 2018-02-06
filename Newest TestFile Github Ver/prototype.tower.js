// create a new function for StructureTower
StructureTower.prototype.defend =
    function () {
        // find closes hostile creep
        var target = this.pos.findClosestByRange(FIND_HOSTILE_CREEPS, {
            // filter: { owner: { username: 'CrazedGod' } }
        });
        // if one is found...
        if (target != undefined) {
            // ...FIRE!
            this.attack(target);
        }
    };

    towerDefend = function(){
        // find all towers
    var towers = _.filter(Game.structures, s => s.structureType == STRUCTURE_TOWER);
    // for each tower
    for (let tower of towers) {
        // run tower logic
        tower.defend();
    }
    }
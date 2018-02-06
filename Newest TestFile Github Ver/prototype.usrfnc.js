module.exports = function() {

    spawnMemClear= function(Memory) {
        for (let name in Memory.creeps) {
            if (Game.creeps[name] == undefined) {
                delete Memory.creeps[name];
            }
        } 
    };
};
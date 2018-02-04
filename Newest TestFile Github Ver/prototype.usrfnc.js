module.exports = function() {

    var testy = {};
    testy.prototype.savePath = function (creep) {
        return this.Room.serializePath(creep.memory.target);

    },
    testy.prototype.loadPath = function (creep) {
        return this.Room.deserializePath(creep.memory.target);

    }

var spawnMemClear = function(Game) {
    for (let name in Memory.creeps) {
    if (Game.creeps[name] == undefined) {
        delete Memory.creeps[name];
    }
} 
};

};
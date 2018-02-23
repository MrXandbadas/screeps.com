module.exports= function(){

};

module.exports.energySourceVar = function (spawn) {
 


    function* runMain1(spawn) {
        let bianaryVar = spawn.room.find(FIND_SOURCES);
        
        
        yield bianaryVar;



        }
    const genRun1 = runMain1(spawn);
    var nextVal = genRun1.next().value;
    

 // end of CreepCheck Const
if (nextVal.length != null) {
    spawn.memory.usrSettings.roomHandler = {}
    spawn.memory.usrSettings.roomHandler.sources = nextVal;
    spawn.memory.usrSettings.roomHandler.creepsHarvesting;
}
genRun1.next()
genRun1.next()
console.log(JSON.stringify(genRun1.next()), " End of RoomHandlerGen?")
//genRun.next();



    //spawn.memory.usrSettings.roomSource



};

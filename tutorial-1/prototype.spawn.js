module.exports = function() {
 
   

    StructureSpawn.prototype.testbody = function (energy, selectedRole) {


    // Defining the bodysize
    let numberOfParts = Math.floor(energy / 200);
    var body = [];
    //looping i until we have an even set of numbers compared to energy/200
    for (let i = 0; i < numberOfParts; i++) {
        body.push(WORK);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(CARRY);
    }
    for (let i = 0; i < numberOfParts; i++) {
        body.push(MOVE);
    }          
     return this.createCreep(body, undefined, { role: selectedRole, working: false });


    }
};
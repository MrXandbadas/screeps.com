var listOfRoles = {};
var roleSelection = {};
let roleSelectionfunction = roleSelection.bind(listOfRoles);

listOfRoles.prototype.roleSelection = function () {
 

        listOfRoles.roleRun = 'test1',
        listOfRoles.harvester = 'test2',
        listOfRoles.delivery = 'test3',
        listOfRoles.repairer = 'test4',
        listOfRoles.builder = 'test5',
        listOfRoles.wallUpgrader = 'test6',
        listOfRoles.upgrader = 'test7',
        listOfRoles.claimer = 'test8'
        testphase();
        console.log('got past testphase call');
        logtime();




}




// Old mumbojumbo
/*
//MyResetLorryRole

if (creep.memory.role === lorry) {
    creep.memory.role = 'delivery';
    console.log(creep.name + 'Changed from Lorry to Delivery')
}

spawnCreep = this.createCreep(body);

// the roles are now Strings within the listOfRoles object.
//start up crap?
var listOfRoles = new Object();



const listOfRoles: {
    role: {
        harvester = function(runrole) {
            if (creep.memory.role == 'harvester') {
                roleHarvester.run(creep);
            };
        },
    minHarvestersCount: '';

        emergencyspawn
            
        },
        delivery: {
            delivery = function(runrole) {
                if (creep.memory.role == 'delivery') {
                    roleDelivery.run(creep);
                };
            },
            minDeliveryCount: '';

        },
        claimer: {
            claimer = function(runrole) {
                if (creep.memory.role == 'claimer') {
                    roleClaimer.run(creep);
                };
            },
            claimerToggle: 0;
            claimerTarget: '';

        },
        upgrader: {
            upgrader = function(runrole) {
                if (creep.memory.role == 'upgrader') {
                    roleUpgrader.run(creep);
                };
            },
            minupgraderCount: '';

        },
        repairer: {
            repairer = function(runrole) {
                if (creep.memory.role == 'harvester') {
                    roleRepairer.run(creep);
                };
            },
            minRepairerCount: '';
        
        },
        builder: {
            builder = function(runrole) {
                if (creep.memory.role == 'builder') {
                    roleBuilder.run(creep);
                };
            },
            minBuilderCount: '';
        },
        wallRepairer: {
            wallRepairer = function(runrole) {
                if (creep.memory.role == 'wallrepairer') {
                    rolewallRepairer.run(creep);
                };
            },
            minwalLRepairerCount: '';
        }
           };
};

//house keeping

for (listOfRoles.role) {
    let role = listOfRoles.role;

    if role 
}


if (listOfRoles.role.harvester.roomcount === desiredHarvesters)




// here is me trying to write a spawn command into a object.





/*
Here Is the speration

let dog = {
var: 'woof'
talk: function() {
console.log(this.sound)
}
}
dog.talk() //willreturn the talk function with woof
let name = dog.talk
let bla = name.bind(dog)



*/
/*
spawn.memory.repopulate = 'false';

//debug purpoisessss
if (spawn.memory.repopulate == 'true') {
    StructureSpawn.prototype.spawndefault =
        /* Calculate what function is called back when refering to the this. call
        This is done using the bind command, forcing the this. to refer to a point? 

        let name = emergency.bind()

        function emergency() { }
        var energy = spawn.room.energyCapacityAvailable;
    //For every Game.spawns return is spawnName.
    for (let spawnName in Game.spawns) {
        let spawn = Game.spawns[spawnName];
        let name = undefined;
        let creepsInRoom = spawn.room.find(FIND_CREEPS);
        let creepsInRoomSt = creepsInRoom.length
        let harvesterCount = _.sum(creepsInRoom, (c) => c.memory.role == 'harvester');
        // if there are no harvesters and no creeps in the room then this evergency trigger will spawn a harvester 
        if (emergencyreached === 0) {
            // try to spawn one
            console.log('HARVESER PRIOTITY due to ' + numberOfHarvesters + ' Emergengy Trigger');
            spawnCreep = this.spawndefault;

        }
        
        // print name to console if spawning was a success
        // name > 0 would not work since string > 0 returns false
        if (name != undefined) {
            console.log("Spawned new creep: " + name);
        }
    }

}
console.log('End of Spawning Script reached');
    
*/















/*


StructureSpawn.prototype.testbody = function (energy, roleName) {


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
    let bodycost = body.length
    console.log('Bodycost test ' + bodycost);
    console.log(JSON.stringify(body))
}


*/
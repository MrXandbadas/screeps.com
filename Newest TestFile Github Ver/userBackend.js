var set = require('userSettings.js');

set.usrRole();

//console.log(usrSetArray);
let myArLen = usrSetArray.length;

for(let i = 0; i < myArLen; i++){
    let myPush = usrSetArray.pop([i]);
    let myPush1 = JSON.stringify(myPush);
    console.log('====' + myPush1)
    console.log('loop ' +i + ' complete')
}
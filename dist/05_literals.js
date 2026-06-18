"use strict";
function getDirection(dir) {
    console.log(`Your direction is ${dir}`);
}
const dir = "left"; // ts will creates literal type to "left"
getDirection(dir);
let dir2 = "east"; // when using let keyword you have to make the varible type of Direction 
getDirection(dir2);

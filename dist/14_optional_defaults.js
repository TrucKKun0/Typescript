"use strict";
const obj = {
    id: 1
};
console.log(obj);
function defaultOperation(n) {
    const toUpper = n ? n?.toLocaleLowerCase() : "Guest";
    return `Hello ${toUpper}`;
}
console.log(defaultOperation("bishow"));
console.log(defaultOperation());
function greetPersonWithDefault(name = "Default") {
    return `Hello ${name}`;
}
console.log(greetPersonWithDefault("Test"));
console.log(greetPersonWithDefault());

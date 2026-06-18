"use strict";
// Understand when to let typescript infer types
// since ts knows js language very well we dont have to give annonation to every variables
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
let a = 10; // ts knows a variable is a type of number 
const b = "bishwo"; // it knows b is a type of string
const arr = [10, 20, "show"]; // it knows arr is a type of array with number or string
// we have given annonation to x and y because their type isnt known to ts
function add(x, y) {
    return x + y;
}
console.log(5, 10);
// you should annonate a varible when type isnt obvious
let con;
con = Math.random() > 0.2 ? "test" : 10;

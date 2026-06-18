// Understand when to let typescript infer types
// since ts knows js language very well we dont have to give annonation to every variables

let a = 10 // ts knows a variable is a type of number 
const b = "bishwo" // it knows b is a type of string
const arr = [10,20,"show"] // it knows arr is a type of array with number or string


// we have given annonation to x and y because their type isnt known to ts
export function add(x : number,y:number): number {
    return x + y
}
console.log(5,10)

// you should annonate a varible when type isnt obvious
let con : string | number
con = Math.random() > 0.2 ? "test" : 10

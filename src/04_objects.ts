type User = {
    id : string, // required field
    name : string, // required field
    email ? : string, // it is a optional field that means if there is email then it will type of string 
    readonly createdAt : Date // once assigned a value it cannot be changed to other
}

const u1 = {
    "id" : "u101",
    "name" : "bishow",
    "createdAt" : Date.now()
}

const u2 = {
    "id" : "u102",
    "name" : "test",
    "email" : "email",
    "createdAt" : Date.now()
}
console.log(u1,u2);

type Count = {
    [k : string] : number
}
type Count1 = Record<"likes" | "comment" | "views" ,number>

let c1 = {whatever : 1}
let c2 = {
    like : 1,
    comment : 2,
    views : 3
}
console.log(c1,c2);


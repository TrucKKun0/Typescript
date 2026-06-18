"use strict";
function printId(id) {
    if (typeof (id) === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toString());
    }
}
function desribeUser(u) {
    if (u.role === "Admin") {
        console.log(u);
    }
    else {
        console.log(u.role);
    }
}
const user = {
    role: "Admin",
    permission: ["read", "write", "delete"]
};
function describeUserWithOperation(u) {
    if ('permission' in u) {
        return u.role;
    }
    else {
        console.log(u.loyaltyPoints.sort());
    }
}
const user1 = {
    role: "User",
    loyaltyPoints: [5, 10]
};
desribeUser(user);
describeUserWithOperation(user1);
// array of unions and union of array
const arrayOfUnions = [
    "a",
    1,
    "b",
    2
];
console.log(arrayOfUnions);
const unionsOfArray = Math.random() > 0.6 ? ['x', 'y', 'z'] : [1, 2, 3,];
console.log(unionsOfArray);

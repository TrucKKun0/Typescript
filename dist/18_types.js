"use strict";
const person = {
    id: 1,
    name: "bishow",
    address: "imadol"
};
console.log(person);
function nextActionCheck(s) {
    switch (s) {
        case "new":
            return "new";
        case "paid":
            return "paid";
        case "pending":
            return "pending";
        default:
            return "defualt";
    }
}
const personWithProduct = {
    id: 2,
    name: "Dip",
    address: "imadol",
    price: 1099,
    stock: 2
};
console.log(personWithProduct);
console.log(nextActionCheck("new"));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = yearToDays;
let a = "Bishow";
const b = 10;
const c = true;
const Token = Symbol("Token");
function yearToDays(y) {
    return y * 365;
}
console.log(yearToDays(5));

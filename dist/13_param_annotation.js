"use strict";
const num12 = [1, 2, 3, 4];
const num13 = num12.map(n => n * 2); // Here the type of n is number 
console.log(num13);
function distanceToOrigin(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distanceToOrigin({ x: 12, y: 13 }));

const num12 : number[] = [1,2,3,4]

const num13 : number [] = num12.map(n=> n*2)// Here the type of n is number 
console.log(num13);

type Point = {
    x : number,
    y : number
}

function distanceToOrigin(p : Point) : number{
    return Math.hypot(p.x,p.y)
}
console.log(distanceToOrigin({x : 12 , y : 13}));

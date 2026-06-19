
function sumAllNumber(...xs : number[]):number{
    return xs.reduce((s,n)=> s+n,0)
}
console.log(sumAllNumber(1,2,3,4));

function makeRange(...args : [start : number , end : number, steps ? : number]):number[] {
    const [start,end,steps =1] = args
    const out : number[] = []
    for(let n = start; n<=end ;n+= steps) out.push(n)
    return out
}
console.log(makeRange(1,2));
console.log(makeRange(5,6,2));

function draw(x : number , y : number):number{
    return x*y
}
const point :[number,number] =[
    1,2
]
console.log(draw(...point));





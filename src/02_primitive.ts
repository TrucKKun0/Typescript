let a : string = "Bishow"
const b : number = 10
const c : boolean = true
const Token : unique symbol = Symbol("Token")

export default function yearToDays(y:number):number{
    return y * 365
}
console.log(yearToDays(5));

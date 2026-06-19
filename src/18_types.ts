type Person = {
    id : number,
    name : string,
    address : string
}
const person : Person={
    id : 1,
    name : "bishow",
    address : "imadol"
}
console.log(person);

type Status = "new" | "paid" | "pending"

function nextActionCheck(s: Status):string{
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

type toMerge1 = {
    price : number
}
type toMerge2 = {
    stock : number
}

type MergedType = Person & toMerge1 & toMerge1

const personWithProduct = {
    id : 2,
    name : "Dip",
    address : "imadol",
    price : 1099,
    stock : 2
}
console.log(personWithProduct);
console.log(nextActionCheck("new"));


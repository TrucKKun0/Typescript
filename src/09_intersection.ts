
type Product = {
    id : number,
    name : string,
    inStock : boolean
}
type Price = {
    price : number
}
type productWithPrice = Product & Price

const p1 : productWithPrice = {
    "id" : 1,
    "name" : "charger",
    "inStock" : true,
    "price" : 200
}
console.log(p1);

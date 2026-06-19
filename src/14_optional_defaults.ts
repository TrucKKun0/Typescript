
const obj : {
    id : number,
    name ?: string
} = {
    id : 1
}
console.log(obj);

function defaultOperation(n? : string) : string{
    const toUpper = n ? n?.toLocaleLowerCase() : "Guest"
    return `Hello ${toUpper}`
}

console.log(defaultOperation("bishow"));
console.log(defaultOperation());

function greetPersonWithDefault(name :string ="Default"):string{
    return `Hello ${name}`
}
console.log(greetPersonWithDefault("Test"))
console.log(greetPersonWithDefault());



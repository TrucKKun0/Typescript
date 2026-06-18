
// strictNull check
// when a variable is assigned a type then it cannot be set undefine or change through config file
//let a : string = "bishow"
//a = undefined

// use union when you are aware of type for that variable
let text : string | undefined = undefined
text = "bishow"

// when a function doenst return anything then make a return type of void
// dont make use of any type

function log(msg : string) : void{
    console.log(msg);
}

// and a function never return anything then make it a type of never 
 function fail(msg : string):never{
    throw new Error(msg);
 }

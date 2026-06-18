
function printId(id : string | number){
        if (typeof(id) === "string"){
            console.log(id.toUpperCase());
        }    else{
            console.log(id.toString());
            
        }
}

type Admin  = {
    role : "Admin",
    permission : string []
}
type Customer = {
    role : "User",
    loyaltyPoints : number[]
}

function desribeUser (u : Admin | Customer ) {
    if (u.role === "Admin"){
        console.log(u);
    }else{
        console.log(u.role);
    }
}

const user : Admin = {
    role : "Admin",
    permission : ["read","write","delete"]
}


function describeUserWithOperation (u : Admin | Customer){
    if('permission' in u){
        return u.role
    }else{
        console.log(u.loyaltyPoints.sort());
    }
}

const user1 : Customer = {
    role : "User",
    loyaltyPoints:[5 ,10]
}
desribeUser(user)
describeUserWithOperation(user1)


// array of unions and union of array

const arrayOfUnions :( string | number) [] = [
    "a",
    1,
    "b",
    2
]
console.log(arrayOfUnions);
const unionsOfArray : string[] | number [] = Math.random() > 0.6 ? ['x','y','z'] : [1,2,3,]
console.log(unionsOfArray);



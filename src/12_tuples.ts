 //tuple have a fixed length and fixed type for an array
//element on the array should be same as types defined 
 const student : [string , number] = [
    "bishow" ,101
 ]
 student[0] = "Dip"
 console.log(student);
 
// optional tuple means that element in array is optional means not required
type user=[id : number,name?:string]
const user12: user=[
    1
]

//readonly tuples means those tuples that cannot be changed
const man : readonly[string,string]=[
    "bishow",
    "rai"
]
//man.push("dip")
console.log(man);

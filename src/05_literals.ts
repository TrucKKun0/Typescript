type Directions = "east" | "south" | "north" | "west"

function getDirection(dir : string) : void{
    console.log(`Your direction is ${dir}`);
}

const dir = "left" // ts will creates literal type to "left"
getDirection(dir)

let dir2 : Directions = "east" // when using let keyword you have to make the varible type of Direction 
getDirection(dir2)
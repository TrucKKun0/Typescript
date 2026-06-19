// interface is used for object shaped that you expect to extend
//supports declaration merging
//types is used for more general purpose like union,intersection ,object or functions
// cannot be reopened (no merging)
interface Box{
    width : number
}
interface Box {
    height : number
}
const area : Box= {
    width : 10,
    height : 15
}

//types cannot be reopened again like interface
type Bag = {
    brand : string
}
// type Bag ={
//     price : number
// }

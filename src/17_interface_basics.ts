interface User101{
    id : number,
    username : string,
    email ?  : string,
    readonly createdAt : Date
}

const user101 : User101 = {
    id : 1,
    username : "Bishow",
    createdAt : new Date()
}
console.log(user101);
const user102 : User101 = {
    id : 2,
    username : "Dip",
    email : "raibishow@gmail.com",
    createdAt : new Date()
}
console.log(user102);

interface AdminUser extends User101{
    permission :string []
}

const user103 : AdminUser = {
    id : 3,
    username : "Admin",
    createdAt : new Date(),
    permission: [
        "read",
        "write",
        "delete"
    ]
}

interface metaData {
    meta : {
        isActive : boolean
    }
}

interface AdminWithMeta extends AdminUser, metaData{}

const user104 = {
     id : 4,
    username : "Admin with meta",
    createdAt : new Date(),
    permission: [
        "read",
        "write",
        "delete"
    ],
    meta:{
        isActive : true
    }
}
console.log(user104);



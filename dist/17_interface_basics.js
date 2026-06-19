"use strict";
const user101 = {
    id: 1,
    username: "Bishow",
    createdAt: new Date()
};
console.log(user101);
const user102 = {
    id: 2,
    username: "Dip",
    email: "raibishow@gmail.com",
    createdAt: new Date()
};
console.log(user102);
const user103 = {
    id: 3,
    username: "Admin",
    createdAt: new Date(),
    permission: [
        "read",
        "write",
        "delete"
    ]
};
const user104 = {
    id: 4,
    username: "Admin with meta",
    createdAt: new Date(),
    permission: [
        "read",
        "write",
        "delete"
    ],
    meta: {
        isActive: true
    }
};
console.log(user104);

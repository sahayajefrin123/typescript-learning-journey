"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Objects-used to store related information using key value pair
let user = {
    name: "jefrin",
    age: 22
};
console.log(user);
console.log(user.name);
const cake = {
    name: "Chocolate Cake",
    rate: 5
};
console.log(cake);
const cake1 = {
    name: "Vanilla Cake",
    rate: 4
};
console.log(cake1);
const user1 = {
    name: "jefrin",
    city: "kochi"
};
console.log(user1);
// user1.name="mag"; //Error : we cannot change, because it has readonly property 
user1.city = "Kerela";
console.log(user1.city);
// product1- our wish 
const product1 = [
    {
        name: "Choco",
        price: 100,
        quantity: 5
    },
    {
        name: "Vanilla",
        price: 200,
        quantity: 10
    },
    {
        name: "Strawberry",
        price: 300,
        quantity: 15
    }
];
console.log(product1);
console.log(product1[1]);
console.log(product1[1].name);
console.log(product1[0].name);
console.log(product1[0].price);
//# sourceMappingURL=object.js.map
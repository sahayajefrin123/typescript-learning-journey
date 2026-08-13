//Objects-used to store related information using key value pair
let user={
    name:"jefrin",
    age:22
};
console.log(user);
console.log(user.name);

//Type aliasing - creating a new name for a type
type Cake={
   name:string;
   rate:number;
}

const cake:Cake={
    name:"Chocolate Cake",
    rate:5
};
console.log(cake);

//Object Interface
interface CakeInterface{
name:string;
rate:number;
type?:string;  //? - Means Optional 
}

const cake1:CakeInterface={
    name:"Vanilla Cake",
    rate:4

};
console.log(cake1);

interface users{
    readonly name:string;
    city:string;

}

const user1:users={
    name:"jefrin",
    city:"kochi"
};
console.log(user1);
// user1.name="mag"; //Error : we cannot change, because it has readonly property 
user1.city="Kerela";
console.log(user1.city);



//Array of Objects 
interface product{
    name:string;
    price:number;
    quantity:number;
}
// product1- our wish 
const product1:product[]=[
{
     name:"Choco",
    price:100,
    quantity:5
},
{
name:"Vanilla",
price:200,
quantity:10
},
{
    name:"Strawberry",
    price:300,
    quantity:15
}

]
console.log(product1);
console.log(product1[1]);
console.log(product1[1].name);
console.log(product1[0].name);
console.log(product1[0].price);





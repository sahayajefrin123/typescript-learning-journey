//map() is an array method used when you want to take every item in an array and create a new array from it.


//To Check the Odd & Even 
const numbers=[1,2,3,4,5,6];
const result=numbers.map((num) => {
    return num %2==0;
});
console.log(result); 

// Sol - New Array, num1 is map with num2
const num1=[22,44,66,88];
const sol=num1.map((num2)=>{
    return num2*5;

});
console.log(sol);

//Map with strings
const name=["jefrin","maglin"];
const res=name.map((n)=>{
return n.toUpperCase()
});
console.log(res);


//Add an item to an array
const fruits=["apple","mango"];
fruits.push("milk");
console.log(fruits);



//Interface with Objects
interface products{
    name:string;
    type:string;
    quantity:number;
    price:number;
}

// Product - variable name | products[] - array of products objects
const product:products[]=[
    
    {
  name:"venilla",
  type:"Two-Tier",
  quantity:3,
  price:300,
    },
    {
        name:"Chocolate",
        type:"CupCakes",
        quantity:2,
        price:400,
    }
]

const cust=product.map((products)=>{
return products.name;
});
console.log(cust);

const customer=product.map((products)=>{
    return products.type;
});
console.log(customer);

const tot=product.map((products)=>{
    return products.price*products.quantity;
});
console.log(tot);  // Calculating Price 


const details=product.map((products)=>{
    return{
        name:products.name,
        tot:products.price*products.quantity,
    }
});
console.log(details);


// Shoter Syntax 
const names=product.map(products=>products.type)
console.log(names)


//map 3 parameter , element / index/ array 
const flavor=["chocolate","vanilla","blueberry"]
flavor.map((name,index)=>{ // index starts from 0, but for numbering +1 
    console.log(index +1 ,name); // +1 indicates the numbering starts from 1 ,2 ...
    
});


// filter method - to get particular field with conditions
const cheapproduct=product.filter(
    product=>product.price>300
)
console.log(cheapproduct);
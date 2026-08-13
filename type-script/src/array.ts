//Arrays - Collection of multiple values in a single variable
let veg = ["beans","ladysfinger","potato"];
console.log(veg);

let frontend=["html","css","javascript", 2 , 3];
console.log(frontend);
console.log(frontend[2]); //Accessing by index value 

//Specific type :
let backend:string[]=["node.js","express","mongodb"];
console.log(backend);
let logic:number[]=[22,44,66];
console.log(logic);

let fruits:Array<string>=["apple","banana","mango"];
console.log(fruits);
fruits[1]="kiwi"; // Updating values using index 
console.log(fruits);
fruits.push("Orange"); // To Add items  at the end
console.log(fruits);


let sub:string[]=["maths","science","traditionalsci","CS","english"];
sub.pop(); //Remove the last item , 0 argument 
console.log(sub); 
console.log(sub.length);

//Array with different type - only string &number is allowed 
let alp:(string|number)[]=["A",1,"B",2];
console.log(alp);

let alps:(string|number)[]=["str","ing"];
console.log(alps);
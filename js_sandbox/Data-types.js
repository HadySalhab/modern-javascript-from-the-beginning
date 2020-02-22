//PRIMITIVE

//STRING
const name = "John Doe";
//NUMBER
const age = 45;
//BOOLEAN
const hasKids = true;
//NULL
const car = null;

//UNDIFINED
let test;

//SYMBOL
const sym = Symbol();

console.log(typeof hasKids);
console.log(typeof car);

//REFERENCE TYPES - Objects

//Array
const hobbies = ["movies", "music"];
//Object Literal
const address = {
  city: "boston",
  state: "MA"
};
const today = new Date();

console.log(today);
console.log(typeof today);

//The type in JS is dynamic, so a variable type is dependent on the type of the value it stores and not the variable itself
let dynamicType = "Hello World";
console.log(typeof dynamicType);
dynamicType = 1234;
console.log(typeof dynamicType);

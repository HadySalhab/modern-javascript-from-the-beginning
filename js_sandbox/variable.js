//var, let, const.
// var name = "John Doe";
// console.log(name);
// name = "Steve Smith"; //re-assign variable
// console.log(name);

// //Init Variable.
// var greeting;
// console.log(greeting); //undefined

// greeting = "Hello";
// console.log(greeting);

// //variable can include : letters, numbers, _ , $
// //cannot start with number
// // var 1name= "John" does not work

// //Multi word vars
// var firstName = "John"; //Camel case
// var first_name = "Sara"; //Underscore
// var FirstName = "Tom"; //Pascal case

//LET
// let name; //initialize
// name ="John Doe";
// console.log(name);
// name = "Steve Smith"; //re-assign variable
// console.log(name);

//CONST
const name = "John";
console.log(name);
//Cannot reassign, name = ...

//We Have to assign a value when declaring the const
//const greeting  , does not work

//Object
const person = {
  name: "John",
  age: 30
};

person.age = 29; //data inside a const object can still be reassigned but the oject itself cannot be
console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6); //we can modify the array in a constant but we cannot reassign the const itself
console.log(numbers);

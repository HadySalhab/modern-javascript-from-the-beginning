// const sayHello = () => {
//   console.log("Hello");
// };

//one line function does not need braces
// const sayHello = () => console.log("Hello"); //it works because its body has only one line

// //one line return
// const sayHello = () => "Hello";

// //same as above
// const sayHello = function() {
//   return "hello";
// };

//Returning an object
//const sayHello = () => ({ msg: "Hello" });

//Single Param does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);

// //Multiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`hello ${firstName} ${lastName}`);

const users = ["Nathan", "John", "William"];

const nameLength = users.map(function(name) {
  return name.length;
});

const nameLength = users.map(name => {
  return name.length;
});

const nameLength = users.map(name => name.length);

// 1- FUNCTION DECLERATION
//default value john and doe
function greet(firstName = "John", lastName = "Doe") {
  //default value es6
  // if (typeof firstName === "undefined") {
  //   //pass default value in case we forgot to pass an argument
  // before es6
  //   firstName = "John";
  // }

  // if (typeof lastName === "undefined") {
  //   //pass default value in case we forgot to pass an argument
  // before es6
  //   firstName = "Doe";
  // }
  // console.log("Hello");
  return `hello ${firstName} ${lastName}`;
}

//2- Function expressions
//variable with anonymous function
const square = function(x = 3) {
  return x * x;
};
console.log(square());

console.log(greet("John", "Doe"));

//3-Immediately invokable function expressions - IIFEs
(function() {
  console.log("IIFE RAN...");
})();

(function(name) {
  console.log(`hello ${name}`);
})("Brad");

//4- PROPERTY METHODS
//we can pass functions to objects
const todo = {
  add: function() {
    console.log("Add todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();

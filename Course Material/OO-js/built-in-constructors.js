//String

const name1 = "Jeff";
const name2 = new String("Jeff"); //creates an object.

console.log(typeof name1); //type string
console.log(typeof name2); // type object

//YES
if (name1 === "Jeff") {
  console.log("Yes");
} else {
  console.log("No");
}
//NO ,because the value is equal but the type is not
if (name2 === "Jeff") {
  console.log("Yes");
} else {
  console.log("No");
}

//Number

const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2); //object

//Boolean

const bool = true;
const bool2 = new Boolean(true);

console.log(bool2); //object

//Function
//function expression
const getSum1 = function(x, y) {
  return x + y;
};

console.log(getSum1(5, 1));

const getSum2 = new Function("x", "y", "return 1+1");

console.log(getSume2(1, 2));

//Object

const john = {
  name: "John",
  age: 25
};
const john2 = new Object({ name: "John" });
console.log(john);
console.log(john2);

//Arrays
const arr1 = [1, 4, 1, 2, 4];

const arr2 = new Array(1, 5, 2, 1, 2);

console.log(arr1);
console.log(arr2);

//Regular expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);

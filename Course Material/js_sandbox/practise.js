//Console.
console.log("Hello");
console.log(true);
console.log(12);
console.log([3, 4, 2, 1, 2]);
console.log(2.4);
console.log({ a: 2, b: 2 });

//variable
let val;
val = "welcome";
val = { name: "Hady", age: 25 };
val = 12.5 * 4;
console.log(val);

//function

function greet(name) {
  console.log(`Hello ${name}`);
}

greet("hady");

let sumCalc = function(numberA, numberB) {
  return numberA + numberB;
};

console.log(sumCalc(10, 11));

let number = 0;
number++; //post increment
++number; //pre increment

let y = number++; //stores the variable than it increment , so y will not have the updated value
y = ++number; //number value will be incremented first than stored in y.

// if(something){
//   do something
// } else{
//   do something else
// }

let id = 100;

//EQUAL TO VALUE ONLY (string of 100 with int 100 will return correct)
// if (id == 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //Not Equal to
// if (id != 101) {
//   console.log("correct");
// } else {
//   console.log("Incorrect");
// }

// //EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

// //NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

//Test undefined
// if (typeof id !== "undefined") {
//   console.log(`The id is ${id}`);
// } else {
//   console.log(`No id`);
// }

//GREATER OR LESS THAN
// if (id >= 100) {
//   console.log("Correct");
// } else {
//   console.log("Incorrect");
// }

//IF ELSE

const color = "yellow";

if (color === "red") {
  console.log("Color is red");
} else if (color === "blue") {
  console.log("Color is blue");
} else {
  console.log("Color is not red or blue");
}

//LOGICAL OPERATORS
const name = "steve";
const age = 66;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 12 && age <= 19) {
  console.log(`$name is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
console.log(id === 100 ? "CORRECT" : `INCORRECT`);

//WITHOUT BRACES
if (id === 100) console.log("CORRECT");
else console.log("INCORRECT");

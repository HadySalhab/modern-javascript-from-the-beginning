//FOR LOOPS
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favorite number");
//     continue; //goes to the next iteration without going to the next statement in this current iteration
//   }
//   if (i === 5) {
//     console.log("Stop the log");
//     break;
//   }
//   console.log("Number" + i);
// }

//WHILE LOOPS
// let i = 0;
// while (i < 10) {
//   console.log("Number" + i);
//   i++;
// }

//DO WHILE (always runs once no matter what)
// let i = 0;
// do {
//   console.log("Number" + i);
//   i++;
// } while (i < 10);

//loops with arrays
const cars = ["Ford", "Chevy", "Honda", "Toyota"];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// cars.forEach(function(car) {
//   console.log(car);
// }); //like kotlin:   cars.forEach { car -> // }

// cars.forEach(function(car, index, array) {
//   console.log(`${index},${car}`);
//   console.log(`${array}`);
// }); //forEach can take three param: Iterator,Index,Array

// //MAP
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Sara" },
//   { id: 3, name: "karen" }
// ];
// const ids = users.map(function(user) {
//   return user.id;
// }); //users.map{user->//}
// console.log(ids);

const user = {
  firstName: "John",
  lastNmae: "Doe",
  age: 40
};

//for in loop
for (let x in user) {
  console.log(x); //will print the Key (object is a key-value pair)
  console.log(`${x} : ${user[x]}`); // ${user[x]} will print the value of this key
}

//GLOBAL SCOPE
var a = 1;
let b = 2;
const c = 3;

//Function scope
// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope: " + a, b, c);
// }
// test();

// if (true) {
//   //Block Scope
//   var a = 4; //this will change the global scope, let & const work like any other language
//   let b = 5;
//   const c = 6;
//   console.log("If Scope: ", a, b, c);
// }

for (var a = 0; a < 10; a++) {
  //var in for scope will affect the global scope as well
  console.log(`Loop: ${a}`);
}

console.log("Global scope: ", a, b, c);

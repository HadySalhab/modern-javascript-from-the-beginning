// Create a symbol

const sym1 = Symbol();
const sym2 = Symbol("sym2");

// console.log(sym2);
// console.log(typeof sym2);

//Symbols cannot be the same.
// console.log(Symbol() === Symbxol()); //false
// console.log(Symbol("123") === Symbxol("123")); //false

// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

//Unique Object keys.

const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Property 1";
myObj[KEY2] = "Property 2";
myObj.key3 = "property 3";
myObj.key4 = "property 4";
// console.log(myObj);

const myObj2 = {
  [Symbol("symb1")]: "property 1",
  [Symbol("symb2")]: "property 2"
};

// myObj.name = "No name";
// console.log(myObj);
// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// //Symbols are not enumerable in for..in
// for (let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

//Symbols are ignore by JSON.stringify
console.log(JSON.stringify({ key: "prop" }));
console.log(
  JSON.stringify({
    [Symbol("sym1")]: "prop"
  })
);

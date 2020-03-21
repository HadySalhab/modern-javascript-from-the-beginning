//SETS = Store unique values of any type

const set1 = new Set();

//Add value to set
set1.add(100);
set1.add("A String");
set1.add({ name: "John" });
set1.add(true);
set1.add(100); //it's already there, so it wont be added. Will be rejected

const set2 = new Set([1, true, "String"]);
// console.log(set2);

// console.log(set1);

// console.log(set1.size);

// console.log(set1.has(100)); //return true/false

// console.log(set1.has(50 + 50)); //return true/false
// console.log(set1.has({ name: "John" })); //returns false, because it is a reference object, even if they have the same syntax or value, it will only be true if they have the same reference
// set1.delete(100);
// console.log(set1);

//Iterating through sets
//for..of
// for (let item of set1) {
//   console.log(item);
// }

// for (let item of set1.entries()) {
//   console.log(item);
// }

set1.forEach(value => {
  console.log(value);
});

//Convert SET to ARRAY
const setArr = Array.from(set1);
console.log(setArr);

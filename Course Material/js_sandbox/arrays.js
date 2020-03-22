//Create Some Arrays
const numbers = [43, 56, 33, 23, 44, 36, 4]; //way 1
const numbers2 = new Array(22, 45, 43, 76, 54); //way 2

const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;
//array length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
//Get single value from array
val = numbers[0]; //starting from 0 index

//Insert into arrays
numbers[2] = 100; //replacing value at index 2

val = numbers.indexOf(36);
val = numbers.indexOf(199); //returns -1 if cannot find this number

//Mutating arrays
//Add on to end
numbers.push(250);

//Add on to front
numbers.unshift(100);

//take off from end
numbers.pop(); // removes/pops the last value

//take off from the front
numbers.shift();

//Splice values
numbers.splice(0, 4); //removes values from the arrays [start,end]

//Reverse
numbers.reverse();

//Concatenate
val = numbers.concat(numbers2); //embed the second array with the first one

//Sorting arrays
val = fruit.sort(); //sorting alphabetically
val = numbers.sort();

//Use the "compare function"
//good for sorting numbers
val = numbers.sort(function(x, y) {
  return x - y;
});

//Reverse sort
//good for sorting numbers
val = numbers.sort(function(x, y) {
  return y - x;
});

//Find
function under50(num) {
  return num < 50;
}
val = numbers.find(under50); //returns the first one under 50

function over50(num) {
  return num > 50;
}
val = numbers.find(over50);

numbers.find(number => {
  return number > 50;
});

console.log(numbers);
console.log(val);

const numb1 = 100;
const numb2 = 50;
let val;

val = numb1 + numb2;
val = numb1 - numb2;
val = numb1 * numb2;
val = numb1 / numb2;
val = numb1 % numb2; //modulus, returns the remainder

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.6); //round to the nearest int
val = Math.ceil(2.3); //round up
val = Math.floor(2.7); //round down
val = Math.sqrt(64); //square root
val = Math.abs(-3); //absolute value
val = Math.pow(8, 2); //eight to the power 2
val = Math.min(2, 33, 5, 3, 1, 25, 5, 21, 55, -2); //gives the minimum value
val = Math.max(2, 33, 5, 3, 1, 25, 5, 21, 55, -2); //gives the maximum value
val = Math.random(); //gives us a random number, even decimal
val = Math.random() * 20; //gives us random number from 0 to 20 (decimal)
val = Math.random() * 20 + 1; //gives us random number from 1 to 20 (decimal)
val = Math.floor(Math.random * 20 + 1); //gives as an int from 1 to 20
console.log(val);

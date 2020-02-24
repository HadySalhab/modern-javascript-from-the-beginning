let val;

//Number To String
val = 555;
val = String(val); //converting a number to String.
val = String(4 + 4);

//Boolean to String
val = String(true); //we have now a string  "true"

//Date To string.
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4, 5]); //String = 1,2,3,4,5 -> count = 9

//toString()
val = (5).toString;
val = true.toString;

//String to Numbers
val = Number("5");
val = Number(true); //parsing a true value to number we get 1
val = Number(false); //parsing a false value to number we get 0
val = Number(null); // ........ we get 0;
val = Number("hello"); //we will get NaN -> Not a Number
val = Number([1, 2, 3, 4]); //we will get NaN.

val = parseInt("100");
val = parseInt("100.30"); // we will get 100 because Int cannot absorbs decimal
val = parseFloat("100.30"); // we will get 100.3,

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length); //Length only work on String.. counts the number of characters in a string.

console.log(val.toFixed()); //function that works on numbers   ,  by default it returns 1 decimal
console.log(val.toFixed(2)); //gets 2 decimal if it exits

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

const val3 = String(5);
const val4 = 6;
const sum2 = val3 + val4;
console.log(sum); //Javascript will automatically convert val4 to String, and concatenate it ---> we get 56
console.log(typeof sum);

const val5 = String(5);
const val6 = 6;
const sum3 = Number(val5 + val6);
console.log(sum); //Javascript will automatically convert val4 to String, and concatenate it ---> we get 56 as a Number type.
console.log(typeof sum);


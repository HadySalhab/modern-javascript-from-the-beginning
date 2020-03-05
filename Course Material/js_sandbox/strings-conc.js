const firstName = "William";
const lastName = "Johnson";
const age = 36;
let val;
const str = "Hello there my name is Brad";
const tags = "Web design,web development,programming";

val = firstName + lastName;

//Concatenation
val = firstName + " " + lastName;

//Append (add on to it, and not replacing it)
val = "Brad ";
val += "Traversy"; //same as val = val + traversy

//concatenation
val = "Hello, my name is " + firstName + " and I am " + age;

//Escaping
val = "That's awesome, I can't wait "; // \'  escaping '

//Length
val = firstName.length;

//concat()
val = firstName.concat(" ", lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[3]; //gives the third character in this string, but start counting from zero

//indexOf
//will return -1 if the result is not found
val = firstName.indexOf("a"); //get the index/position of this specific character in this string, from left to right
val = firstName.lastIndexOf("l"); //get the index of this character in this string but from right to left

//charAt
val = firstName.charAt("2"); //gives the character at this specific index

//get last char
val = firstName.charAt(firstName.length - 1); //to get the last character in this string.

//Substring
val = firstName.substring(0, 4); //extracting char from 0 to 4 [including 0 & 4] , and return the string

//Slice
val = firstName.slice(0, 4); //very similar to substring
val = firstName.slice(-3); //starts from the back and get the last 3 characters

//split()
val = str.split(" "); //will split at the space, this will return an array of string
val = tags.split(","); //will split at/by the comma , this will return an array of string

//replace
val = str.replace("Brad", "Jack"); //replaces brad by jack

//includes()
val = str.includes("Hello"); //return a true/false value, whether the argument exist/include inside on the string (case sensitive)

console.log(val);

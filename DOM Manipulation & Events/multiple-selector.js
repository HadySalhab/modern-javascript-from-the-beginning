// //document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item"); //in html , they have a class = 'collection-item' , //return type HtmlCollection
// console.log(items); // all elements that have the above class
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item"); //attach this collection-item to the above ul, meaning that we are selecting the collection-item that belongs to the first ul in DOM
// console.log(listItems);

//****************************************** */
//document.getElementsByTagName
let lis = document.getElementsByTagName("li"); //htmlCollection and not an array
// console.log(lis);
// console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";

lis = Array.from(lis); //converting HTMLCollection to Arrays
lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});
lis.reverse();

console.log(lis);

//****************************************** */
//document.querySelectorAll
//returns nodes list
const items = document.querySelectorAll("ul.collection li.collection-item"); //we can put any kind of CSS selector in this method
items.forEach(function(item, index) {
  //we can apply forEach on nodesList without converting it to array
  item.textContent = `${index}: Hello`;
});
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li, index) {
  //we can apply forEach on nodesList without converting it to array
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);

//nodesList we can apply to it the arrayBracket[] , forLoop and length() function

//REPLACE ELEMENT

//Create Element
const newHeading = document.createElement("h2");
//Add id
newHeading.id = "task-title";

//New text node
newHeading.appendChild(document.createTextNode("Task List"));

//Get the old heading
const oldHeading = document.getElementById("task-title"); //select the first element that has this id

//Parent
const cardAction = document.querySelector(".car-action");

//Replace
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//Remove list item
lis[0].remove();

//Remove child element
list.removeChild(lis[3]); //list.remove() will remove the list itself, list.removeChild() will remove the child of this list

//Classes & attr
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

//classes
let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");

//attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("href"); //true/false
val = link.removeAttribute("href");

val = link;
console.log(val);

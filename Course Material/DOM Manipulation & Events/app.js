let val;
val = document;
val = document.all;
val = document.all; //All document Collection
val = document.all[0]; // gives the html in this case
val = document.all.length; //# of elements in the DOM
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType; //text/html

//we can select elements from the dom without selector but is NOT RECOMMENDED
val = document.forms;
val = document.forms[0]; //the first form in the DOM
val = document.forms[0].id; //id of the form
val = document.forms[0].method; //method of the form
val = document.forms[0].action; //action of the form

val = document.links; //gives all links (a tag) in DOM
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute("src"); //select the src Attribute

let scripts = document.scripts; //returns the scripts available in the DOM //htmlCollection returned

let scriptsArray = Array.from(scripts); //turning it into array (htmlCollection to array)

scriptsArray.forEach(function(script) {
  console.log(script.getAttribute("src"));
});

console.log(val);

//Create Element
const li = document.createElement("li");

//Add class
li.className = "collection-item";

//Add id
li.id = "new-item";

//Add Attribute
li.setAttribute("title", "New Item");

//Create text node and append
//appendChild means we want to put something inside another thing
li.appendChild(document.createTextNode("Hello World"));

//Create a new link element
const link = document.createElement("a");
//add classes to link
link.className = "delete-item secondary-content";
//add icon html to link
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link into li
li.appendChild(link);

//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);

console.log(li);

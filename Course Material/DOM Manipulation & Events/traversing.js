let val;

const list = document.querySelector("ul.collection"); //Select ONLY the First ul that has class = 'collection' , in case there are many
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//Get child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

//NodeType:
//1 means Element
//2 means Attribute (deprecated)
//3 means Text node
//8 means Comment
//9 means Document Itself
//10 means Doctype

// Get children element nodes
//** IMPORTANT **/
// child nodes , gives us different type of child nodes,
//children gives us specifically the element type
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";

//Children of children
val = list.children[3].children; //get the children of the 4th li inside the ul.collection
list.children[3].children[0].id = "test-link";

val = list.firstChild;
val = list.firstChild; //gives us the first node, whether is an element, text comment ...
val = list.firstElementChild; //gives us the first 'element' child.

val = list.lastChild; //gives us the last node, whether is an element, text comment ...
val = list.lastElementChild; //gives us the last 'element' child.

val = list.childElementCount; //the # of the child elements

//Get parent node
val = listItem.parentNode; //the parent node of the listItem
val = listItem.parentElement;
val = listItem.parentElement.parentElement; //the parent of listItem is ul, the parent of ul is div card.

//Get Next sibling
val = listItem.nextSibling; //gives the next sibling node (any type)
val = listItem.nextElementSibling; //gives the next ELEMENT sibling node
val = listItem.nextElementSibling.nextElementSibling;

//Get previous sibling
val = listItem.previousSibling; //if no available sibling , will return null.
val = listItem.previousElementSibling;

console.log(val);

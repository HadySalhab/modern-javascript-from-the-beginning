// document.getElementById()

console.log(document.getElementById("task-title")); //get the element that has this id

// Get things from the element
console.log(document.getElementById("task-title").id); //gets the element first, that select the id
console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");

// Change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
// document.getElementById("task-title").style.display = "none";

// Change content
taskTitle.textContent = "Task List"; // change the text content
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector  (newer) , it can select anything

console.log(document.querySelector("#task-title")); //select the id task-title
console.log(document.querySelector(".card-title")); //select the class card-title
console.log(document.querySelector("h5")); //select only the first h5 element in the DOM
document.querySelector("li").style.color = "red"; //select only the first li element and changes the text color
document.querySelector("ul li").style.color = "green";
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(3)").style.color = "orange"; //select the 3rd li child
document.querySelector("li:nth-child(4)").textContent = "Hello world"; //select the 3rd li child
document.querySelector("li:nth-child(even)").style.background = "#ccc"; //select the FIRST EVEN
document.querySelector("li:nth-child(odd)").style.background = "#f4f4f4"; //select the FIRST ODD

// querySelector is just a ONE element selector.

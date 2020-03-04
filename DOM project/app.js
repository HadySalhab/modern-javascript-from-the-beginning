//Define UI Variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Load All Event Listeners

loadEventListeners();

//Load ALL Event Listeners

function loadEventListeners() {
  //Add task Event
  form.addEventListener("submit", addTask);
}

function addTask(e) {
  //if the input on the form is empty, alert the user
  if (taskInput.value === "") {
    alert("Add a Task");
  }
  //Create li element

  const li = document.createElement("li");
  //Add A class
  li.className = "collection-item";

  //Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement("a");
  //Add class
  link.className = "delete-item secondary-content";
  //Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}

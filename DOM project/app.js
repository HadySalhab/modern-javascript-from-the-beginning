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
  //DOM Load task event
  //this event will be fired as soon as the DOM get loaded
  document.addEventListener("DOMContentLoaded", getTasks);

  //Add task Event
  form.addEventListener("submit", addTask);

  //Remove task
  taskList.addEventListener("click", removeTask); //adding an event to the ul

  //clear all tasks
  clearBtn.addEventListener("click", clearTasks);

  //filter tasks events
  filter.addEventListener("keyup", filterTasks);
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task) {
    const li = document.createElement("li");
    //Add A class
    li.className = "collection-item";

    //Create text node and append to li
    li.appendChild(document.createTextNode(task));

    //Create new link element
    const link = document.createElement("a");
    //Add class
    link.className = "delete-item secondary-content";
    //Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });
}

function addTask(e) {
  //if the input on the form is empty, alert the user
  if (taskInput.value === "") {
    alert("Add a Task");
  } else {
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

    //Stor in LS
    storeTaskInLocalStorage(taskInput.value);

    //Clear input
    taskInput.value = "";
  }

  e.preventDefault();
}

function storeTaskInLocalStorage(taskInput) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(taskInput);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove from the DOM
function removeTask(e) {
  //event delegation, we are delegating the event from the ul to the anchor child
  //but since pressing on the x icon, will make the icon the target, we are delegating it up to the anchor so we can remove
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      //splice is an array function , that removes elements: we specify the index of the starting element to be removed and the number of elements to be removed.
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove from the local storage

//Clear Tasks from the DOM
function clearTasks(e) {
  // taskList.innerHTML = ""; //first way

  // Faster-2nd way
  // falsy values: undefined , null , 0 , '' , NaN;
  //if the condition below is false, it will not be executed
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTaskFromLocalStorage();
}

//Clear Tasks From the LS
function clearTaskFromLocalStorage() {
  localStorage.clear();
}

//Filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  //remember querSelectorALl returns a nodeList, which can accept the forEach function
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    //.indexOf is a string function, that returns the index of a character and -1 if it does not exist
    //we can even do it with item.toLowerCase().include(text);
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
  console.log(text);
}

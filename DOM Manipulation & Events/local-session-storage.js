//Set Local Storage Item
//localStorage.setItem("name", "John");
//localStorage.setItem("age", 30);

//Set Session Storage Item
// sessionStorage.setItem("name", "Beth");

// //remove from storage
// localStorage.removeItem("name");

// //get Item from the storage
// const name = localStorage.getItem("name"); //will return the associated value of this key
// const age = localStorage.getItem("age");

// //clear local storage
// localStorage.clear;

// console.log(name);

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task Saved");
});

const tasks = JSON.parse(localStorage.getItem("tasks"));
tasks.forEach(function(task) {
  console.log(task);
});
